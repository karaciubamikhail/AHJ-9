// TODO: write code here
let btn = document.querySelector('.widget-btn');
let content = document.querySelector('.widget')
let value;
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(value)
    if(value == false || value == undefined){
        content.classList.add('content-active')
        value = true;
    }else{
        content.classList.remove('content-active')
        value = false;
    }
})