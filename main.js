//building the calculator

//variables that store items
let str1 = ""
let count = 0
let answer = ""
//needs a storage system that stores the number results and screen
function updateScreen(){
    document.querySelector("p").innerHTML = str1
}



//needs a selection for each button on the screen
let buttons = document.querySelectorAll("button")
let clear = document.querySelector("#clear")
//adding eventlisteners to the buttons
for(let i = 5;i<buttons.length-1;i++){
    buttons[i].addEventListener("click",(event)=>{
        str1 = str1 + `${event.target.innerText}`
        answer = answer + `${event.target.innerText}`
        updateScreen()
        count = 0
    })
}
//adding event listeners to operands
for(let i = 1;i< 5;i++){
    buttons[i].addEventListener("click",(event)=>{
        //needs as way to delegate the opperations and hold the opperation until the equal sign or another operation is pressed
        answer = answer + `${event.target.innerText}`
        let str2 = ""
        for(let i = 0; i < answer.length-1;i++){
            str2 = str2 + answer[i]
        }
        str1 = eval(str2)
        //sets answer back to one number
        updateScreen()
        str1 = ""
    })
}

//making the functions work
// equal sign should imediatly solve the solution
document.querySelector("#equals").addEventListener("click",()=>{
    console.log(answer)
        str1 = eval(answer)
        updateScreen()
        str1 = ""
})
clear.addEventListener("click",()=>{
    //this is the reset function
    clearing()
    updateScreen()
})
//needs a way to make the clicks look good

function blink (){
   
}
//clear function and also just runs at the begining
function clearing (){
    str1 = "0"
    str2 = ""
    count = 0
    answer = ""
}
clearing()

// //maybe add code for future operations




















// //variables to store results
// let str1 = ""
// let str2 = ""
// let operator = ""
// let count = 0
// function updateScreen(){
//     document.querySelector("p").innerText = str1
// }
// //string building
// //querry selecting all the buttons
// let buttons = document.querySelectorAll("button")
// //giving buttons an event listener
// for(let char of buttons){
//     char.addEventListener('click',(event)=>{
//         if(event.target.innerText === "/"||event.target.innerText === "*"||event.target.innerText === "+"||event.target.innerText === "-"){
//          operator = operator +  event.target.innerText
//         } else {
//        str1 = str1 + `${event.target.innerText}`
//        updateScreen()
//         }
//         if(operator.length === 2){
//             str1 = eval(str1)
//             updateScreen()
//         }
//     })
    
// }


