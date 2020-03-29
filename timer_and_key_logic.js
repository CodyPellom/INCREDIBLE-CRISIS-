/**Globals Start Here */
let timer_ = document.getElementById('timer_');
let result = document.getElementById('result');
let requirement = document.getElementById('requirement');
let isZero = false;
let key_counter = 0;
let timer_count = 0;
let initial_click_amnt = 60;
/**Globals End Here */

/**Set requirement in DOM for player to pass the round */
requirement.textContent = '60 ';
/** */

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

/**Below is the ley press logic which increases the global timer 
 * which is being tracked. 
 */
document.body.onkeypress = function (e) {
    if (e.keyCode == 32) {
        key_counter++;
        console.log(key_counter);
    }
}

/**This is fired by the game timer above to check if the player fulfilled
 * the requirements to pass the round. 
 */
function checkResults() {
    if (isZero === true && key_counter < initial_click_amnt) {
        result.textContent = 'Failed!';
    }
    if (isZero == true && key_counter >= initial_click_amnt) {
        result.textContent = 'Passed!';
    }
}