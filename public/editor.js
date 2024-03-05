// require('dotenv').config()
// Retrieve Elements
const executeCodeBtn = document.querySelector('.editor__run')
const executeResetBtn = document.querySelector('.editor__reset')
const executeSubmitBtn = document.querySelector('.editor__submit')
const consoleLogList = document.querySelector('.editor__console-logs')
const startingCode = document.querySelector('.default_code')

const answersArr = document.querySelector('.answers')

// console.log(testArrary.textContent)
let answers = answersArr.textContent.split(',')
console.log(answers)

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

            console.log('true')
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
            // fontFamily: 'Inconsolata',
            fontSize: '12pt',
            // enableBasicAutocompletion: true,
            // enableLiveAutocompletion: true,
        })

        // Set Default Code
        codeEditor.setValue(defaultCode)
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
