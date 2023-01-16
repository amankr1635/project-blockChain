
const { default: axios } = require('axios');
const blockModel = require('../models/model');

const getBlock =  async function(req, res){
 try{

    let options = {
       headers: {Authorization:"Bearer b5f8b993-ce79-468a-ba18-3fa85deff330"},
       method: "get",
       url: `https://api.coincap.io/v2/assets`
    }
    let result = await axios(options)
    let data = result.data.data
const sortdata = data.sort((a, b) => { return a.changePercent24Hr - b.changePercent24Hr }); 
        
    await blockModel.deleteMany() 

    let block = await blockModel.create(sortdata)

    let finalBlocks = await blockModel.find().select({__v:0, _id:0}) 

    return res.status(201).send({staus:true, message:"Blocks successfully created", data:finalBlocks})

 }catch(error){
    return res.status(500).send({status:false, message: error.message})

 }
}
module.exports = {getBlock}