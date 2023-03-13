const express = require('express')
const next = require('next')

const HOSTNAME = 'localhost'
const PORT = 3000

const app = next({ dev: true, hostname: HOSTNAME, port: PORT })
const pageHandler = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.all('*', (req, res) => {
        return pageHandler(req, res)
    })

    const serverListening = server.listen(PORT, (error) => {
        if (error) console.error("[Server] ERROR: ", error)

        console.log('[Server] App is running!')
    })

    return serverListening
})