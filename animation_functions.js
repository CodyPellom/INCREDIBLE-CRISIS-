/**Globals for animation functions start here */
let game_timer_countdown_area = document.getElementById('game_timer_countdown_area');
let isGameCountdownDone = false;
/**Globals for animation functions end here */


/**Below starts the Game countdown indicator.
 *  This kicks off the timer and key logic 
 */
function game_start_countdown_timer(num) {
    game_timer_countdown = num + 1;
    let y = setInterval(function () {
        game_timer_countdown--;
        game_timer_countdown_area.textContent = game_timer_countdown;
        if (game_timer_countdown === 0) {
            isGameCountdownDone = true;
            clearInterval(y);
            game_timer_countdown_area.textContent = 'GO!!!';
            setTimer(10); //This kicks off timer_and_key_logic.js
        }
    }, 1000);
}
game_start_countdown_timer(3);
