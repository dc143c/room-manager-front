const { default: axios } = require("axios")

var url = "https://dc143c-room-manager.herokuapp.com/api/v1/rooms/"

let roomController = {
update: (params, body) => new Promise(async (resolve, reject) => {
    try{
        await axios.put(`${url}/${params}`, body)
        .then((res) => {
            resolve(res.data)
        })
    }catch(err){
        console.log("Error on update: " + err.data.message);
        reject(err.data)
    }
}),

delete: (params, body) => new Promise(async (resolve, reject) => {
    try{   
        await axios.delete(`${url}/${params}`, body)
        .then((res) => {
            resolve(res.data)
        })
    }catch(err){
        console.log("Error on delete: " + err.data.message);
        reject(err.data)
    }
}),

create: (params, body) => new Promise(async (resolve, reject) => {
    try{
        await axios.post(`${url}/${params}`, body)
        .then((res) => {
            resolve(res.data)
        })
    }catch(err){
        console.log("Error on creation: " + err.data.message);
        reject(err.data)
    }
}),

findAll: () => new Promise(async (resolve, reject) => {
    try{
        await axios.get(`${url}`)
        .then((res) => {
            resolve(res.data)
        })
    }catch(err){
        console.log("Error on findAll: " + err.data);
        reject(err.data)
    }

}),

findOne: (params, body) => new Promise((resolve, reject) => {
    try{
        axios.get(`${url}/${params}`, body)
        .then((res) => {
            resolve(res.data)
        })       
    }catch(err){
        console.log("Error on find one: " + err.data);
        reject(err.data)
    }
})
}

module.exports = roomController;