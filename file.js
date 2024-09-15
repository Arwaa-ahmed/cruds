let title=document.getElementById('title');
let price=document.getElementById('price');
let tax=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let count=document.getElementById('count');
let category=document.getElementById('category');
let create=document.getElementById('create');
let total=document.getElementById('total');

function calc(){
    if(price.value!=''){
        let result=(+price.value+ +tax.value+ +ads.value)- +discount.value; //بحط بلاص عشان يحول السترينج لرقم
    total.innerHTML=result;
    total.style.background='#040';
    }
    else{
        total.innerHTML='';
        total.style.background='brown';
    }
    
}