const btn = document.getElementById("btnClick")
const chislo = document.getElementById("schet")
console.log(btn, chislo)
let count = 0;
btn.addEventListener("click", () => {
    chislo.textContent = ++count
})