const xlsx = require('xlsx')
const fs = require('fs')
const path = require('path')

const EXCEL_FILE_PATH = path.resolve('../data/components.xlsx')
const JSON_FILE_PATH = path.resolve('../data/catalog-data.json')

const generateCatalogData = () => {
    const workbook = xlsx.readFile(EXCEL_FILE_PATH)
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = xlsx.utils.sheet_to_json(sheet)

    const transformedData = data.map((item) => ({
        brand: item['Brand'] || '',
        partnumber: item['Part Number'] || '',
        available: item['Available'] || 0,
        leadtime: item['Lead Time'],
    }))

    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(transformedData, null, 2))
    console.log(`JSON файл был успешно создан: ${JSON_FILE_PATH}`)
}

generateCatalogData()
