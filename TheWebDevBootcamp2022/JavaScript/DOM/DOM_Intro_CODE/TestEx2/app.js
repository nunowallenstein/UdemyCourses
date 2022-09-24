const div=document.getElementById("container");
const buttons=(number)=>{
for(let i=0;i<number;i++)
{
const button=document.createElement("button");
const textbutton=document.createTextNode("bot");
  button.appendChild(textbutton);
  div.appendChild(button);
}}

buttons(200);

    