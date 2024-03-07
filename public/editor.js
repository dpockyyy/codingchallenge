// require('dotenv').config()
// Retrieve Elements
const executeCodeBtn = document.querySelector('.editor__run')
const executeResetBtn = document.querySelector('.editor__reset')
const executeSubmitBtn = document.querySelector('.editor__submit')
const aiSendBtn = document.querySelector('.ai-send')

const consoleLogList = document.querySelector('.editor__console-logs')
const startingCode = document.querySelector('.default_code')
const solutionCode = document.querySelector('.solution_code')
const statement = document.querySelector('.statement')
const solution = document.querySelector('.solution')
const aiAssistant = document.querySelector('.ai-assistant')
const aiAssistantInput = document.querySelector('.ai-assistant-input')

const statementWindow = document.querySelector('.statement-window')
const solutionWindow = document.querySelector('.solution-window')
const aiAssistantWindow = document.querySelector('.ai-assistant-window')
const conversationWindow = document.querySelector('.conversation-window')

const chatWindow = document.querySelector('.msg-page')

statement.addEventListener('click', handleStatementClick)
solution.addEventListener('click', handleSolutionClick)
aiAssistant.addEventListener('click', handleAiClick)
aiSendBtn.addEventListener('click', handleAiSend)


function handleAiSend() {

    const userCode = codeEditor.getValue();
    let userMessage = aiAssistantInput.value

    if (userMessage === '') {

        userMessage = `Help me find the error in my code`
    }

    fetch(`/GPT?code=${userCode}&message=${userMessage}`, {
        method: 'post'
    })
        .then(response => response.json())
        .then(result => {

            let response = result.messages.pop().content
            const responseContainer = document.createElement('div')
            responseContainer.className = "received-msg"
            const responseMessage = document.createElement('pre')
            responseMessage.innerHTML = response
            responseContainer.appendChild(responseMessage)
            chatWindow.appendChild(responseContainer)

        })
    
    const newMessage = document.createElement('div')
    newMessage.textContent = userMessage
    newMessage.className = 'outgoing-msg'
    aiAssistantInput.value = ''
    aiAssistantInput.placeholder = ''
    chatWindow.appendChild(newMessage)

}


function handleStatementClick() {
    
    statementWindow.style.display = 'block'
    solutionWindow.style.display = 'none'
    aiAssistantWindow.style.display = 'none'
}

function handleSolutionClick() {
    solutionWindow.style.display = 'block'
    statementWindow.style.display = 'none'
    aiAssistantWindow.style.display = 'none'
}

function handleAiClick() {
    solutionWindow.style.display = 'none'
    statementWindow.style.display = 'none'
    aiAssistantWindow.style.display = 'block'
}



const answersArr = document.querySelector('.answers')
let answers = answersArr.textContent.split('@')

// Setup Ace
let codeEditor = ace.edit("editorCode")
let defaultCode = startingCode.textContent
let consoleMessages = []


let editorLib = {
    clearConsoleScreen() {
        consoleMessages.length = 0;

        // Remove all elements in the log list  
        while (consoleLogList.firstChild) {
            consoleLogList.removeChild(consoleLogList.firstChild)
        }
    },
    printToConsole() {  


        for ( let i = 0; i < consoleMessages.length; i++) {
            const newLogItem = document.createElement('li')
            const newLogText = document.createElement('pre')
            
            newLogText.className = consoleMessages[i].class;
            newLogText.textContent = `> ${consoleMessages[i].message}`
          
            newLogItem.appendChild(newLogText)

            consoleLogList.appendChild(newLogItem)
        }
    },
    submitToConsole() {
        let passedTests = true
        for ( let i = 0; i < consoleMessages.length; i++) {
            const newLogItem = document.createElement('li')
            const newLogText = document.createElement('pre')

            if (String(consoleMessages[i].message) === answers[i]) {
                newLogText.className = `log log--string`
                newLogText.textContent = `> ${consoleMessages[i].message}`
            } else {
                newLogText.className = 'log log--error'
                newLogText.textContent = `> ${consoleMessages[i].message} - expected ${answers[i]}`
                passedTests = false
            }

            newLogItem.appendChild(newLogText)
            consoleLogList.appendChild(newLogItem)
        }
        if (passedTests) {
            const newLogItem = document.createElement('li')
            const newLogText = document.createElement('pre')

            // console.log('true')
            newLogText.className = `log log--string`
            newLogText.textContent = `> Success, all test cases passed!`

            newLogItem.appendChild(newLogText)
            consoleLogList.appendChild(newLogItem)
        }

    },

    init() {
        // Configure Ace

        // Theme    
        codeEditor.setTheme("ace/theme/twilight");

        // Set language
        codeEditor.session.setMode("ace/mode/javascript");

        // Set Options
        codeEditor.setOptions({
            fontSize: '13pt',
        })

        // Set Default Code
        codeEditor.setValue(defaultCode)
    }
}

let codeEditor2 = ace.edit("editorCode2")
let solCode = solutionCode.textContent

let editorLib2 = {

    init() {
        // Configure Ace

        // Theme    
        codeEditor2.setTheme("ace/theme/twilight");

        // Set language
        codeEditor2.session.setMode("ace/mode/javascript");

        // Set Options
        codeEditor2.setOptions({
            fontSize: '13pt',
        })

        // Set Default Code
        codeEditor2.setValue(solCode)
    }
}

executeCodeBtn.addEventListener('click', () => {
    // Clear console messages
    editorLib.clearConsoleScreen()

    // Get input form the code editor
    const userCode = codeEditor.getValue();

    // Run the user code
    try {
        new Function(userCode)()
    } catch (err) {
        console.error(err)
    }

    // Print to the console
    editorLib.printToConsole()
})

executeResetBtn.addEventListener('click', () => {
    // Clear code editor
    codeEditor.setValue(defaultCode)

    // Clear console messages
    editorLib.clearConsoleScreen()
})

executeSubmitBtn.addEventListener('click', () => {

    editorLib.clearConsoleScreen()
    
    const userCode = codeEditor.getValue()

    try {
        new Function(userCode)()
    } catch (err) {
        console.error(err)
    }

    editorLib.submitToConsole()

})

editorLib.init()
editorLib2.init()
