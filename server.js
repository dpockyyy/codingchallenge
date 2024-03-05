require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./db/index')


const port = 8080;
const expressLayouts = require('express-ejs-layouts')
// const test = require('./public/editor')



app.use(expressLayouts)
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set("layout extractScripts", true)
// req.render('view', {extractScripts: true})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/problem', (req, res) => {

    const sql = `
    SELECT * FROM problems;
    `

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        let problem = result.rows[0]
        console.log(problem)
        let testString = problem.default_code
        let newLines = testString.replaceAll("<N>", '\n')
        let testCases = problem.test_cases.split("<N>")
        res.render('problem', {
            extractScripts: true,
            task_title: problem.task_title,
            description: problem.description,
            test_cases: testCases,
            answers: problem.answers,
            default_code: newLines
        })
    }) 
    
})


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})