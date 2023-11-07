let input = document.querySelector("input");
let button = document.querySelector(".button");
let list = document.querySelector(".list");
let ul = document.querySelector(".list ul");
let div = document.querySelector(".con");
let remove = document.querySelector(".remove");
let sort=document.querySelector('.sort img')
let errors=document.querySelector('.error')
let goods = [];
errors.style="display:none"
let show = (arr) => {
  ul.innerHTML = "";
  arr.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `<p>${item}</p><div class='del' onclick="listremove('${item}')"><span class='left'></span><span class='right'></span></div>`;
    ul.appendChild(li);
  });
};

button.addEventListener("click", () => {
   if(input.value==="" || input.value===" "){
      errors.style='display:block'
   }else{
         div.style = "height:397px;";
         list.style = "display:block;";
         goods.push(input.value);
         show(goods);
         console.log(goods);
         console.log(input.value);
         input.value = "";
         errors.style = "display:none";
   }
  
});

remove.addEventListener("click", () => {
  input.value = "";
});
 flag = true;
sort.addEventListener('click',()=>{
  
   if(flag===true){
     sort.src = "Group 91.png";
      goods.sort((a, b) => a.localeCompare(b));
    
     show(goods)
     flag=false   
   }else if(flag===false){
      sort.src = "Group 73.png";
      goods.sort((a, b) => b.localeCompare(a));
      show(goods)
      flag=true
   }
   
})
let listremove = (name) => {
  goods = goods.filter((item) => item !== name);
  console.log(goods);
  show(goods);
};

show(goods);
