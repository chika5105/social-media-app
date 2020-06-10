import express from 'express'
import devBundle from './devBundle' //comment out when in production mode
import path from 'path'
import templater from './../template'
import {MongoClient} from 'mongodb'
const url = process.env.MONGODB_URI ||  'mongodb://localhost:27017/mernSimpleSetup'

const app = express()
devBundle.compile(app) //comment out when in production mode
const CURRENT_WORKING_DIR  = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR,'dist')))
app.get('/', (req,res)=>{
    res.status(200).send(template())
})
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server listening on port %s.', port)
})
MongoClient.connect(url, (err,db)=>{
    console.log("Connected successfully to MongoDB server")
    db.close()
})