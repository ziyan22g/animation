let sidebar =document.getElementById('sidebar')
let menu = document.getElementById('menu')
let close_btn = document.getElementById('close-btn')


menu.addEventListener('click', ()=>{
    sidebar.classList.add('show')
})
close_btn.addEventListener('click', ()=>{
    sidebar.classList.remove('show')
})

