const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let swords = ['lust', 'heaven', 'intution', 'lava', 'jerk', 'clay', 'buttock', 'random', 'rust', 'python', 'music', 'favourite', 'noise', 'theory', 'fenwick', 'algorithm', 
'angular' , 'swift', 'golang', 'cheater', 'cocktail', 'blender', 'weed', 'sastenashe'];
let newwords = "";
let randwords = "";

const createwords = () => {
    let randn = Math.floor(Math.random() * swords.length);
    let word = swords[randn];
    return word;
}

const scramble = (arr) => {
    arr = arr.split("");
    for(let i = arr.length - 1; i > arr.length/2; i --) {
        let j = Math.floor(Math.random() * (i));
        console.log(i,j);
        console.log(arr[i],arr[j]);

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        console.log(arr[i],arr[j]);
    }
    console.log("here", arr);
    // arr.join("");
    return arr.join("");
}

let play = false;
btn.addEventListener('click', function() {
    if(!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newwords = createwords();
        randwords = scramble(newwords);
        console.log(randwords);
        msg.innerHTML = randwords;
    }
    else {
        let tempword = guess.value;
        if(tempword == newwords) {
            play = false;
            msg.innerHTML = "wooh!! you guessed it right";
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else {
            msg.innerHTML = `oops !! its incorrect , please try again`;
            guess.value = "";
        }
    }
})
