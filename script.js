class Calculator {
    constructor(previousDisplay,currentDisplay) {
        this.precision = 12
        this.previousDisplay = previousDisplay
        this.currentDisplay = currentDisplay
        this.clear()
    }
    clear() {
        this.previous = ""
        this.current = "0"
        this.operation = undefined
    }

    delete() {
       this.current = (this.current.length !== 1) ? this.current.slice(0,-1) : "0"
    }

    appendNumber(string) {
        if(string === "." && this.current.includes(".")) return
        if(string === "0" && this.current === "0") return
        if(this.current === "0" && string !== ".") this.current = string
        else this.current = this.current + string
    }

    setOperation(operation) {
        if(this.previous !== "") { this.compute() }
        else {
            this.operation = operation
            this.previous = this.current
            this.current = "0"
        }
    }

    handleKeyPress(key) {
        const numberKeyValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
        const operationKeyValues = ["+", "-", "*", "×", "/", "÷"]
        const deleteKeyValues = ["Backspace", "Delete"]
        const equalsKeyValues = ["=", "Enter"]

        if(numberKeyValues.includes(key.key)) this.appendNumber(key.key)
        else if(operationKeyValues.includes(key.key)) this.setOperation(key.key)
        else if(deleteKeyValues.includes(key.key)) this.delete()
        else if(equalsKeyValues.includes(key.key)) this.compute()
        else if(key.key === "Escape") this.clear()
        else return
        this.update()
    }

    compute() {
        let result
        const prevNumber = parseFloat(this.previous)
        const currNumber = parseFloat(this.current)
        
        if(isNaN(prevNumber) || isNaN(currNumber)) return
        if((this.operation === "÷" || this.operation === "/") && currNumber === 0) {
            alert("Can't divide by 0")
            return
        }

        switch(this.operation) {
            case("+"):
                result = prevNumber + currNumber
                break
            case("-"):
                result = prevNumber - currNumber
                break
            case("×"):
            case("*"):
                result = prevNumber * currNumber
                break
            case("÷"):
            case("/"):
                result = prevNumber / currNumber
                break
            default:
                break
        }
        this.current = +result.toPrecision(this.precision)
        this.previous = ""
        this.operation = undefined

    }
    
    update() {
        this.currentDisplay.innerText = this.current
        this.previousDisplay.innerText = this.previous !== "" ? `${this.previous} ${this.operation}` : ""
    }
}

const keys = [...document.querySelectorAll(".key")]
const numberKeys = keys.filter(key=> key.classList.contains("number"))
const operationKeys = keys.filter(key=> key.classList.contains("operation"))
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const equalsButton = document.querySelector(".equals")

const previousDisplay = document.querySelector(".input-stack")
const currentDisplay = document.querySelector(".result")

const calculator = new Calculator(previousDisplay, currentDisplay)

clearButton.addEventListener("click", () => {
    calculator.clear()
    calculator.update()
})

deleteButton.addEventListener("click", () => {
    calculator.delete()
    calculator.update()
})

numberKeys.forEach(key => {
    key.addEventListener("click", () => {
        calculator.appendNumber(key.innerText)
        calculator.update()
    })
})

operationKeys.forEach(key => {
    key.addEventListener("click", () => {
        calculator.setOperation(key.innerText)
        calculator.update()
    })
})

equalsButton.addEventListener("click", () => {
    calculator.compute()
    calculator.update()
})

window.addEventListener("keyup", (e) => {
    calculator.handleKeyPress(e)
})