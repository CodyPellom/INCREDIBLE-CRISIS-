let timer_ = document.getElementById('timer_');
let result = document.getElementById('result');
let isZero = false;
let kay_counter = 0;
let timer_count = 0;
let initial_click_amnt = 60;

function setTimer(num) {
    timer_count = num + 1;
    let x = setInterval(function () {
        timer_count--;
        timer_.textContent = timer_count;
        if (timer_count === 0) {
            isZero = true;
            clearInterval(x);
            checkResults();
        }
    }, 1000);

}
document.body.onkeypress = function (e) {
    if (e.keyCode == 32) {
        kay_counter++;
        console.log(kay_counter);
}
}


function checkResults() {
    if (isZero === true && kay_counter <  initial_click_amnt) {
        result.textContent = 'Failed!';
    }
    if (isZero == true && kay_counter >= initial_click_amnt){
        result.textContent = 'Passed!';
    }
}



setTimer(10);
