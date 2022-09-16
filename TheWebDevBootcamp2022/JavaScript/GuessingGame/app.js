let maximum = parseInt(prompt("Enter a maximum number to guess from"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a maximum number to guess from"));
}

answer = Math.round(Math.random() * maximum)



guess = prompt("Guess a number")
attempts = 1;
while (parseInt(guess) !== answer) {
    if (guess === 'q') {
        console.log('quitting');
        break;
    }
    else {
        if (guess < answer) {
            guess = prompt("Your guess was too low");
        }
        else {
            guess = prompt("your guess was too high");
        }
        attempts++;
    }
}
if (guess === "q")
    console.log("quitted the game");
else
    console.log(`You guessed the correct number, ${answer}, in ${attempts} tries`);
