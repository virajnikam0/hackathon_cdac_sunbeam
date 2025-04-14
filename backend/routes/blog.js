const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../db/db')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

// router.get('/allblog', (req,res) => {
//     const sql = `select `
// })

// test
router.post('/addblog', (req,res) => {
    const title = req.body.title
    const category = req.body.category
    const description = req.body.description

    const sql = `insert into blog(title, content) values(?,?) `
    pool.query(sql, [title, category, description], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

// actual
// router.post('/addblog', (req,res) => {
//     const title = req.body.title
//     const category = req.body.category
//     const description = req.body.description

//     const sql = `insert into blog(title, content) values(?,?) `
//     pool.query(sql, [title, category, description], (error, data) => {
//         res.send(result.createResult(error, data))
//     })
// })

router.get('/myblog', (req,res) => {
    const sql = `select blog.title, category.title, user.full_name from category, user, blog where blog.user_id = user.id and category.id = blog.category_id `
})

router.put('/myblog/:id', (req,res) => {
    
})

router.delete('/myblog/:id', (req,res) => {
    
})

module.exports = router










module.exports = router