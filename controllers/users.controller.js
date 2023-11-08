const {data}=require("../user.json");



// const {getQueryErrors}=require("../middlewares/validators/user.validator.js");

const getUsers=(req,res)=>{
    res.send(data);
}


const getUsersByUuid=(req,res)=>{
    const {uuid}=req.params;

    const result=data.find((ele)=>ele.login.uuid===uuid);
    res.send(result);
}

const getUsersWithGenderAndAge=(req,res)=>{

    console.log("venkat",req.addNewKey);
    const {gender,age}=req.query;


    // const error=getQueryErrors({age:age,gender:gender});

    // if(error){

    //     console.log(error);
    //     return res.status(422).json(error);
    // }

    if(gender && age){
        const result=data.filter((item)=>item.gender === gender && Number(item.dob.age)=== Number(age))
        res.send(result);
    }
    else if (gender){
        const result=data.filter((item)=>item.gender===gender);
        res.send(result);
    }
    else if (age){
        const result=data.filter((item)=>Number(item.dob.age)=== Number(age));
        res.send(result);
    }
    else{
        res.sendStatus(404);
    }

}

module.exports={getUsers,getUsersByUuid,getUsersWithGenderAndAge};