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
                    <td><button onclick="deletedata(${i})" id="update">delete</button></td>
                </tr>
        `
    }
     document.getElementById('tbody').innerHTML=table;
     let btn=document.getElementById('btn')
     if(data.length>0){
        btn.innerHTML=`
        <button onclick="deleteall()">Delete all</button>
        `
     }
     else{
        btn.innerHTML=' ';
     }
}
//delete
function deletedata(i){
    data.splice(i,1); //بيحذف عنصر واحدالاندكس بتاعه i
    localStorage.product=JSON.stringify(data); //عشان يشيلها من اللوكال لان غير كدا هتفضل موجودة بسبب انها متشالتش من اللوكال
    //فبديله الاراي ف شكلها الجديد بعد الحذف
    showdata(); //عشان يرجع يظهر الداتا كلها م تاني  بشكلها الجديد
}

//delete all
function deleteall(){
    localStorage.clear();
    data.splice(0);
    showdata();

}