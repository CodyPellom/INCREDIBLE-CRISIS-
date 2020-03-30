/**Globals for animation functions start here */
let game_timer_countdown_area = document.getElementById('game_timer_countdown_area');
let isGameCountdownDone = false;
let requirement = document.getElementById('requirement');
/**Globals for animation functions end here */


/**Below starts the round countdown
 *  and kicks off the timer and key logic 
 */
function game_start_countdown_timer(num) {
    game_timer_countdown = num + 1;
    let y = setInterval(function () {
        game_timer_countdown--;
        /**Anime is handling the Countdown animation**/
       if (game_timer_countdown === 1) {
       }
        if (game_timer_countdown === 0) {
            isGameCountdownDone = true;
            clearInterval(y);
            requirement.textContent = 'PRESS THE SPACEBAR 60 TIMES!' 
            setTimer(10); //This kicks off timer_and_key_logic.js
        }
    }, 1000);
}
game_start_countdown_timer(3);

/**Anime Countdown Functions Start*/
/**
 * 
 */
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 500;
ml4.durationOut = 400;
ml4.delay = 400;

anime.timeline({loop: false})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
    color: 'rgb(26, 255, 163)'
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    color: 'red',
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
    color: 'rgb(255, 255, 77)'
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
    color: 'rgb(255, 77, 77)'
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-4',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
    color: 'rgb(255, 77, 77)'
  }).add({
    targets: '.ml4 .letters-4',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 100,
    delay: 100
  });
  /**Anime countdown functions end */
/*
 * 
 **/