let secretNumber = getRandomInt(1, 10);
let hint = document.querySelector('.hint');
let attempts = 3;
let finish = false;
let njew = document.querySelector('.new');


document.querySelector('.content').onclick = function () {
    let target = event.target;
    if (target.classList.contains('number')) {

        let userNumber = target.innerHTML;
        check(userNumber);

    } else if (target.classList.contains('new')) {
        attempts = 3;
        secretNumber = getRandomInt(1, 10);
        finish = false;
        hint.innerHTML = 'Отгадай число';
        document.querySelector('span').innerHTML = attempts;
        njew.style.backgroundColor = '#6f7fdf'; //кнопку нужно поменять программно
        njew.onmouseover = function () {
            njew.style.backgroundColor = '#8f9fff';
        };
        njew.onmouseout = function () {
            njew.style.backgroundColor = '#6f7fdf';
        };
    }
};
// вывод кол-во попыток на странице ; если попытки кончились то вывести сообщение 'проигрыш'
function check(userNumber) {
    if (!finish) {
        if (userNumber == secretNumber) {
            hint.innerHTML = 'Победа, Вы угадали!';
            finish = true;
            document.querySelector('.new').style.backgroundColor = '#f44336';
            njew.onmouseover = function () {
                njew.style.backgroundColor = '#e43326';
            };
            njew.onmouseout = function () {
                njew.style.backgroundColor = '#f44336';
            };

        }
        if (userNumber > secretNumber) {
            hint.innerHTML = 'Секретное число - меньше!';
            attempts -= 1;
        }
        if (userNumber < secretNumber) {
            hint.innerHTML = 'Секретное число - больше!';
            attempts -= 1;
        }
        document.querySelector('span').innerHTML = attempts;
        if (attempts === 0) {
            hint.innerHTML = 'конец игры, проигрыш';
            finish = true;
            document.querySelector('.new').style.backgroundColor = '#f44336';
            njew.onmouseover = function () {
                njew.style.backgroundColor = '#e43326';
            };
            njew.onmouseout = function () {
                njew.style.backgroundColor = '#f44336';
            };
        }
    }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}