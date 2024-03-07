require('dotenv').config()

const express = require('express')
const app = express()
const db = require('./db/index')
const port = 8080;
const expressLayouts = require('express-ejs-layouts')


app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'ejs')
app.set("layout extractScripts", true)

const OpenAi = require('openai')

const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY
})

messages = []

app.post('/GPT', async (req, res) => {
    const code = req.query.code
    const message = req.query.message + '<N>' + code


    messages.push(
        {
            role: "assistant",
            content: "I want you to take on the persona of David Goggins and motivate me to become a better coder through tough love. The users code will be appended at the end of their prompt, separated by the delimiter '<N>'. Only refer to the users code if the prompt refers to the code, otherwise just handle the users prompt. Do not give the complete solution but hints in the right direction instead."
        },
        {
            role: "user",
            content: message, 
        } 
    )
    try {
        const response = openai.chat.completions.create({
            messages,
            model: "gpt-3.5-turbo",
            max_tokens: 400,
        })

        response
            .then((result) => {
                messages.push({
                    role: 'assistant',
                    content: result.choices[0].message.content,
            
                })
                return res.status(200).json({
                    data: result.choices[0].message.content,
                    messages
                })
            })
    } catch (error) {}
})



app.get('/', (req, res) => {

    const sql = `
    SELECT * FROM problems;
    `
   

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        // console.log(result.rows)
        res.render('home', {
            problems: result.rows
        })
    })

})

app.get('/evolution/:id', (req, res) => {

    let id = req.params.id

    const sql = `
    SELECT * 
    FROM problems
    WHERE evolution_id = $1;
    `

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err)
        }
        let problem = result.rows[0]
        let defaultCode = problem.default_code.replaceAll("<N", '\n')
        let solutionCode = problem.solution.replaceAll("<N", '\n')
        

        
        res.render('evolution', {
            extractScripts: true,
            evolution_id: problem.evolution_id,
            task_title: problem.task_title,
            description: problem.description,
            solution_code: solutionCode,
            answers: problem.answers,
            default_code: defaultCode
        })
    }) 
    
})


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})