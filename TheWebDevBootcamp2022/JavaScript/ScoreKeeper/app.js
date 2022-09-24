
const button3 = document.querySelector("#button3");
const score = document.querySelector("#score");
const initialScore = score.innerHTML;


const reset=function(){ 
    score.innerHTML=initialScore;
    document.querySelectorAll("b").forEach((x)=>x.classList.forEach((y)=>x.remove(y)));
    document.querySelectorAll("button[class='score']").forEach((x) => x.disabled = false);

}
const select=document.querySelector("#select");
let maxScore=parseInt(select.options[select.selectedIndex].value)

const clickScorePlayer = (e) => {
        const selectedButton = e.target;

        const selectedScore=`b[id$=${selectedButton.id}]`;
        const scoreRaise = document.querySelector(selectedScore);

        const unselectedScores=`b:not([id$=${selectedButton.id}])`;
        const scoreKeepers=document.querySelectorAll(unselectedScores);
        const parsedScore = parseInt(scoreRaise.innerHTML);
    
        scoreRaise.innerHTML = parsedScore + 1;
       
        if (parseInt(scoreRaise.innerHTML) === maxScore)
        {
            document.querySelectorAll("button[class='score']").forEach((x) => x.disabled = true);
            scoreRaise.classList.add("winner");
            scoreKeepers.forEach((x)=>x.classList.add("loser"));
        }
        
}

button3.addEventListener("click",reset);

document.querySelector("#select").addEventListener("change",function() {
    maxScore=parseInt(select.options[select.selectedIndex].value);
    reset()})

document.querySelectorAll("button[class='score']").forEach((x)=>x.addEventListener("click",clickScorePlayer));
