const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans=document.getElementsByTagName("span");

[...spans].forEach((span,idx)=> span.style.color=colors[idx]  );