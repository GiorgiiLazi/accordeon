const buttons = document.querySelectorAll(".accordeon div button")
const para = document.querySelectorAll(".accordeon p")

console.log(buttons)
console.log(para)

buttons.forEach(btn =>{
    btn.addEventListener('click', e =>{
        let index = e.target.getAttribute('data-index')
        para[index].classList.toggle("showAcc")
        console.log(e.target.value)
    })
})