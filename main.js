//building the calculator

//variables that store items
let str1 = ""
let str2 = ""
let typeOfOperationsRun = 0

//needs a storage system that stores the number results and screen
function updateScreen(){
    document.querySelector("p").innerHTML = str1
}

//needs as way to delegate the opperations and hold the opperation until the equal sign or another operation is pressed

//needs a process for each operation on the screen
function addittion (num,num2){
    num = parseFloat(num)
    num2 = parseFloat(num2)
    console.log(num,num2)
    let answer = num + num2
    return answer
}
function subtraction (num,num2){
    parseFloat(num)
    parseFloat(num2)
    let answer = num - num2
    return answer
}
function multiplication (num,num2){
    parseFloat(num)
    parseFloat(num2)
    let answer = num * num2
    return answer
}
function division (num,num2){
    parseFloat(num)
    parseFloat(num2)
    let answer = num / num2
    return answer
}
//needs a selection for each button on the screen
let buttons = document.querySelectorAll("button")
// let zero = document.getElementById("num0")
// let one = document.getElementById("num1")
// let two = document.getElementById("num2")
// let three = document.getElementById("num3")
// let four = document.getElementById("num4")
// let five = document.getElementById("num5")
// let six = document.getElementById("num6")
// let seven = document.getElementById("num7")
// let eight = document.getElementById("num8")
// let nine = document.getElementById("num9")
// let decimal = document.querySelector("#numd")
// let clear = document.querySelector("#clear")
// let add = document.querySelector("#add")
// let subtract = document.querySelector("#subtract")
// let multiply = document.querySelector("#multiply")
// let divide = document.querySelector("#divide")

//adding eventlisteners to the buttons
for(let i = 6;i<buttons.length;i++){
    buttons[i].addEventListener("click",(event)=>{
        str1 = str1 + `${event.target.innerText}`
        updateScreen()
    })
}
// zero.addEventListener("click",()=>{
//     str1 = str1 + "0"
//     updateScreen()
// })
// one.addEventListener("click",()=>{
//     str1 = str1 + "1"
//     updateScreen()
// })
// two.addEventListener("click",()=>{
//     str1 = str1 + "2"
//     updateScreen()
// })
// three.addEventListener("click",()=>{
//     str1 = str1 + "3"
//     updateScreen()
// })
// four.addEventListener("click",()=>{
//     str1 = str1 + "4"
//     updateScreen()
// })
// five.addEventListener("click",()=>{
//     str1 = str1 + "5"
//     updateScreen()
// })
// six.addEventListener("click",()=>{
//     str1 = str1 + "6"
//     updateScreen()
// })
// seven.addEventListener("click",()=>{
//     str1 = str1 + "7"
//     updateScreen()
// })
// eight.addEventListener("click",()=>{
//     str1 = str1 + "8"
//     updateScreen()
// })
// nine.addEventListener("click",()=>{
//     str1 = str1 + "9"
//     updateScreen()
// })
// decimal.addEventListener("click",()=>{
//     str1 = str1 + "."
// })
//resets str displayed and stores a new str
//also adding event listeners for the functions
let count = 0
add.addEventListener("click",()=>{
    if(typeOfOperationsRun === 0 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 1
        count++
        str2 = str1
        str1 = ""
    } else if(typeOfOperationsRun === 1 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        count = 0
        str1 = addittion(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 2 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        count = 0
        str1 = subtraction(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 3 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = multiplication(str2,str1)
        updateScreen()
        count = 0
    } else if(typeOfOperationsRun === 4 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        count = 0
        str1 = division(str2,str1)
        updateScreen()
    }
})
subtract.addEventListener("click",()=>{
    if(typeOfOperationsRun === 0 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 2
        str2 = str1
        str1 = ""
    } else if(typeOfOperationsRun === 1 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = addittion(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 2 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = subtraction(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 3 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = multiplication(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 4 && count === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = division(str2,str1)
        updateScreen()
    }
})
multiply.addEventListener("click",()=>{
    if(typeOfOperationsRun === 3){
        // console.log(str2,str1)
        typeOfOperationsRun = 1
        str2 = str1
        str1 = ""
    } else if(typeOfOperationsRun === 1){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = addittion(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 2){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = subtraction(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 3){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = multiplication(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 4){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = division(str2,str1)
        updateScreen()
    }
})
divide.addEventListener("click",()=>{
    if(typeOfOperationsRun === 0){
        // console.log(str2,str1)
        typeOfOperationsRun = 4
        str2 = str1
        str1 = ""
    } else if(typeOfOperationsRun === 1){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = addittion(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 2){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = subtraction(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 3){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = multiplication(str2,str1)
        updateScreen()
    } else if(typeOfOperationsRun === 4){
        // console.log(str2,str1)
        typeOfOperationsRun = 0
        str1 = division(str2,str1)
        updateScreen()
    }
})

//needs a way to make the clicks look good

function blink (){
   
}

//maybe add code for future operations