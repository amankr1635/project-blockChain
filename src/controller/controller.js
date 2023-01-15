const coinModel = require("../models/model");
const axios = require("axios")

const getCoins = async function(req,res){
    const headers = req.headers.authorization

    console.log(headers)

    const coinsData = await axios.get(`https://api.coincap.io/v2/assets`)
    const data = coinsData.data.data
    let {symbol , name ,marketCapUsd , priceUsd , changePercent24Hr} = data
    // const dataInDb = await coinModel.find({data})
    // if(dataInDb){return res.status(200).send({status:true, msg: "Data Already Exist"})}
    const finalData = await coinModel.create(data)
    res.send({status : true , data: symbol,name,marketCapUsd,priceUsd,changePercent24Hr})

}


module.exports.getCoins = getCoins