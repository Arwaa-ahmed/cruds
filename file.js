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
    data=JSON.parse(localStorage.getItem('product'));//لو اللوكال بتاعتي فيها بيانات حطهم في الاراي الي اسمها داتا
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
    clear();
    showdata();
}

//clear inputs
function clear(){
    title.value=' ';
    price.value=' ';
    tax.value=' ';
    ads.value=' ';
    discount.value=' ';
    count.value=' ';
    total.innerHTML=' ';
    category.value=' ';
}
//read
function showdata(){
    let table='';
    for(let i=0;i<data.length;i++){
        table+=`
          <tr>
                    <td>${i}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].tax}/td>
                    <td>${data[i].ads}</td>
                    <td>${data[i].discount}</td>
                    <td>${data[i].total}</td>
                    <td>${data[i].count}</td>
                    <td><button id="update">update</button></td>
                    <td><button id="update">delete</button></td>
                </tr>
        `
    }
     document.getElementById('tbody').innerHTML=table;
}
