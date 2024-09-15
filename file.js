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
//create product
let data;
if(localStorage.product!=null){
    data=JSON.parse(localStorage.getItem('product'));
}
else{
    data=[];
}
create.onclick=function(){
    let newpro={
        title:title.value,
        price:price.value,
        tax:tax.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        category:category.value,
        total:total.innerHTML
    }
    data.push(newpro);
    localStorage.setItem('product',JSON.stringify(data));
    console.log(data);
}