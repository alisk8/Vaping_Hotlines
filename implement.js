let btn = document.querySelector('#but');
let chal = document.querySelector('#chal');


let challanges = ['Workout', 'Read an article about vaping', 'Talk to someone on Hotlines', 'Learn a new skill', 'Run a mile', 'Talk to someone who was able to quit an addiction', 'Go watch a movie', 'Read a book', 'Go hang out with a friend', 'Play sports', 'Find a new hobby'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btn.addEventListener('click', () => {
    document.getElementById('buts').style.display = 'inline-block';
    document.getElementById('cong').style.display = 'none';
    document.getElementById('congs').style.display = 'none';
    let index = getRandomNumber(0, challanges.length-1);
    chal.innerText = challanges[index];
});

function comp(){
    document.getElementById('buts').style.display = 'none';
    document.getElementById('cong').style.display = 'block';
    document.getElementById('congs').style.display = 'block';
    document.getElementById('cong').innerHTML= 'Congratulations, Try and do another one or come back tommorow';
    document.getElementById('congs').innerHTML='Hit the "Generate a Challange Button"';
}