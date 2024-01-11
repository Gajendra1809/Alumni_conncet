const express = require('express')
const router = express.Router()

router.post('/jobs',(req,res)=>{
    try {
        console.log(global.jobs)
        res.send([global.jobs ])
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }

})


module.exports=router;