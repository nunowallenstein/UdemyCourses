const h1 = document.querySelector("#h1");
const button = document.querySelector("#button");
const body = document.body;

const RNGcolor = () => { return Math.round(Math.random() * 255); }

const randomColor = () => {
    const RNGcolours = [RNGcolor(), RNGcolor(), RNGcolor()];
    return "rgb(" + RNGcolours.reduce((str, x) => `${str},${x}`) + ")";
};


const click = () => {
    const color = randomColor();
    h1.innerText = color;
    body.style.backgroundColor = color;
}

const func2=(arg)=>{console.log(arg)}

button.addEventListener("click", (eve)=>{console.log(eve)});