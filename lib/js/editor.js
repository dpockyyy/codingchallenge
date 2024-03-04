// Retrieve Elements
const executeCodeBtn = document.querySelector('.editor__run')
const executeResetBtn = document.querySelector('.editor__reset')
const consoleLogList = document.querySelector('.editor__console-logs')


// Setup Ace
let codeEditor = ace.edit("editorCode")
let defaultCode = 'console.log("Hello World!")'
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
        consoleMessages.forEach(log => {
            const newLogItem = document.createElement('li')
            const newLogText = document.createElement('pre')

            newLogText.className = log.class;
            newLogText.textContent = `> ${log.message}`

            newLogItem.appendChild(newLogText)

            consoleLogList.appendChild(newLogItem)
        })
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
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
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

editorLib.init()