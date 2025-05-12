const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const sumBtn = document.getElementById("sumBtn")
const subBtn = document.getElementById("subBtn")
const delBtn = document.getElementById("delBtn")
const ymnBtn = document.getElementById("ymnBtn")
const result = document.getElementById("result")

sumBtn.addEventListener("click", () => {
    let numFirst = parseInt(num1.value)
    let numSecond = parseInt(num2.value)
    if (isNaN(numFirst) || isNaN(numSecond)) {
        result.textContent = "Введите оба числа!"
        return
    }else{
        let sum = numFirst + numSecond
        result.textContent = sum
    }    
    
})
subBtn.addEventListener("click", () => {
    let numFirst = parseInt(num1.value)
    let numSecond = parseInt(num2.value)
    if (isNaN(numFirst) || isNaN(numSecond)) {
        result.textContent = "Введите оба числа!"
        return
    }else{
        let sub = numFirst - numSecond
        result.textContent = sub
    }   
})
delBtn.addEventListener("click", () => {
    let numFirst = parseInt(num1.value)
    let numSecond = parseInt(num2.value)
    if (isNaN(numFirst) || isNaN(numSecond)) {
        result.textContent = "Введите оба числа!"
        return
    }else if(numSecond === 0){
        result.textContent = "Есть 0!"
        return
    }else{
        let del = numFirst / numSecond
        result.textContent = del
    }    
    
})
ymnBtn.addEventListener("click", () => {
    let numFirst = parseInt(num1.value)
    let numSecond = parseInt(num2.value)
    if (isNaN(numFirst) || isNaN(numSecond)) {
        result.textContent = "Введите оба числа!"
        return
    }else{
        let ymn = numFirst * numSecond
        result.textContent = ymn
    }    
    
})