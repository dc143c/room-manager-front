const express = require('express')
const controller = require('../controller/roomController')
const router = express.Router()

module.exports = router

router.get('/', async function (req, res) {
    let rooms = await controller.findAll()
    res.render('home', {
        rooms: rooms
    })
})

router.post('/deleteById', async function (req, res) {
    try{
        controller.delete(`/${req.body.id}`).then((response) => {
            res.send(response)
        })
    } catch (err) {
        console.log(err)
        console.log("Error on POST delete: " + err.message);
        res.status(500).send(err);
    }
})


router.post('/findById', async function (req, res) {
    try{
        controller.findOne(`/${req.body.id}`).then((response) => {
            res.send(response)
        })
    } catch (err) {
        console.log(err)
        console.log("Error on POST delete: " + err.message);
        res.status(500).send(err);
    }
})

router.post('/updateById', async function (req, res) {
    try{
        controller.update(`/${req.body.id}`, req.body.data).then((response) => {
            res.send(response)
        })
    } catch (err) {
        console.log(err)
        console.log("Error on POST update: " + err.message);
        res.status(500).send(err);
    }
})

router.post('/findAll', async function (req, res) {
    try{
        controller.findAll().then((response) => {
            res.send(response)
        })
    } catch (err) {
        console.log(err)
        console.log("Error on POST getAll: " + err.message);
        res.status(500).send(err);
    }
})


router.post('/createRoom', async function (req, res) {
    try{
        controller.create({}, req.body.data).then((response) => {
            res.send(response)
        })
    } catch (err) {
        console.log(err)
        console.log("Error on POST createRoom: " + err.message);
        res.status(500).send(err);
    }
})