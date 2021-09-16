// const express = require('express')
import express, { request, response } from 'express'
import { helloWorld } from './routes'

const app = express()

app.get('/', helloWorld)

app.listen(3333, () => {
    console.log('Servidor Rodando!')
})


/*
yarn init -y => package.json
yarn add typescript -D
yarn add express
yadd add @types/express -D
node src/index.ts => error pois nao executa arquivos typescript
yarn tsc --init => tsconfig.json
yarn tsc => converter os arquivos para TS para JS
node dist/index.js
*/