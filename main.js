let btn1 = document.querySelector('.outer-button');
let btn2 = document.querySelector('.inner-button');

function theEvent(){
    let changeInner = (e)=>{
    let btn = document.querySelector('.inner-button');  
    btn.classList.toggle('inner-on');
    //btn.innerHTML = "|";
    console.log(e);
}
changeInner();
  let changeOuter = ()=>{
    let btn = document.querySelector('.outer-button');
    btn.classList.toggle('outer-on');
}
changeOuter();
}

//btn1.addEventListener('click', changeOuter);
btn2.addEventListener('click', theEvent);