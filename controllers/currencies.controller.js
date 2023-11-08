const {data}=require("../currency.json");



 const getCurrencies=(req,res)=>{
    res.send(data);
}


const getSpecificCurrencies=(req,res)=>{
    const {symbol}=req.params;
    const result=data.find((elem)=>elem.id.toLowerCase()=== symbol);
    res.send(result);
  }



module.exports={getCurrencies,getSpecificCurrencies};