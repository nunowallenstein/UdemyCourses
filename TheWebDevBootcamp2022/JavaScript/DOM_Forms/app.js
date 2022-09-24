const form = document.querySelector('form');

const inputs=document.querySelectorAll("input");

const submit=(e)=>{
   const product=inputs[0].value;
   const quantity=inputs[1].value;
const li=document.createElement("li");
   li.innerText=`${product} ${quantity}`;
   const ul=document.querySelector("#list");
   ul.appendChild(li);
   inputs[0].value='';
   inputs[1].value='';
    e.preventDefault();
}

form.addEventListener("submit",submit);
