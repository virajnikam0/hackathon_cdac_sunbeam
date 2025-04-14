const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../db/db')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

router.get('/', (req, res) => {
    const sql = `select * from category`
    pool.query(sql, (error, data) =>{
        res.send(result.createResult(error, data))
    })

})

router.post('/add', (req,res) => {
    const {id, title, description} = req.body
    const sql = `insert into category(id, title, description) values(?,?,?)`
    pool.query(sql, [id, title, description], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.put('/update', (req, res) => {
    const {id, title, description} = req.body
    const sql = `update category set title=?, description=? where id=?`
    pool.query(sql, [id, title, description], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.delete('/delete', (req, res) => {
    const sql = `delete from category where id=?`
    pool.query(sql, [id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router




