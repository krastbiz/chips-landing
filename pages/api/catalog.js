import fs from 'fs'
import path from 'path'
import Fuse from 'fuse.js'

const DATA_FILE_PATH = path.resolve(process.cwd(), 'data/catalog-data.json')

const cache = new Map()

export async function search(req, res) {
    const { query } = req
    const search = query.q || ''
    const page = parseInt(query.page, 10) || 1
    const itemsPerPage = parseInt(query.itemsPerPage, 10) || 100

    const cacheKey = `${search}|${itemsPerPage}`

    if (cache.has(cacheKey)) {
        const { data, total } = cache.get(cacheKey)

        const startIndex = (page - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        const paginatedResults = data.slice(startIndex, endIndex)

        return res.status(200).json({
            data: paginatedResults,
            total,
        })
    }

    const data = JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf-8'))

    const options = {
        keys: ['partnumber', 'brand'],
        includeScore: true,
        threshold: 0.2,
        minMatchCharLength: 3,
    }

    const fuse = new Fuse(data, options)
    const results = fuse.search(search)

    const paginatedResults = results.map((result) => result.item)

    cache.set(cacheKey, {
        data: paginatedResults,
        total: results.length,
    })

    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedData = paginatedResults.slice(startIndex, endIndex)

    res.status(200).json({
        data: paginatedData,
        total: results.length,
    })
}

export default function handler(req, res) {
    if (req.method === 'GET') {
        return search(req, res)
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
