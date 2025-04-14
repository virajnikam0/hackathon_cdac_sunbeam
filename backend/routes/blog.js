const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../db/db')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

router.get('/allblog', (req, res) => {
    const sql = `SELECT * FROM blog`;
    pool.query(sql, (error, data) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to fetch blogs' });
        } else {
            console.log(result.createResult(error, data)); 
            res.send(data); 
            console.log(data);
        }
    }
    )
});

    // test
    router.post('/addblog', (req, res) => {
        const title = req.body.title
        // const category = req.body.category
        const description = req.body.description
        console.log(title);
        console.log(description)

        const sql = `insert into blog(title,content) values(?,?) `
        pool.query(sql, [title, description], (error, data) => {
            res.send(result.createResult(error, data))
        })
    })

    router.get('/myblog', (req, res) => {
        const sql = `select blog.title, category.title, user.full_name from category, user, blog where blog.user_id = user.id and category.id = blog.category_id `
    })

    router.put('/myblog/id', (req, res) => {

    })

    router.delete('/myblog', (req, res) => {

    })
    module.exports = router
