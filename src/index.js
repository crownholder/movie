// import express and dotenv package installed above
import express from 'express'
import dotenv from 'dotenv'
import { createClient } from "@astrajs/collections"

// instantiate our express app
const app = express()

// enable env varibales for .env file
dotenv.config()

// a basic index route
app.get('/', (req,res)=>{
  res.send("You're in the index page")
})

// run application on Port:: 5000
app.listen(5000, () => {
    console.log(`server running: port:: 5000`)
})


// enable json and url encoded data
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// create an Astra DB client
const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  })


  const collection = astraClient.namespace("antidote_ks").collection("testcollection")


  // get all documents
app.get('/blogs', async (req, res) => {
    const blogs = await collection.find({})
    return res.json(blogs)
  })