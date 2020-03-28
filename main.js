let timer_ = document.getElementById('timer_');

/**Simple Timer Logic Start */
/** */
/** */
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        //milliseconds = (now().getMilliseconds()) ;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; //+ ":" + milliseconds;

        if (--timer < 0) {
            timer = duration;
        }
        //         
     
    }, 1000);
}

    
var counter = 0; 
var arrCounter = [];

spaceCounter = (counter) => {
    let display = document.querySelector('#timer_');

    startTimer(30, display);
    if (startTimer == 25){ //Need to figure this out
        alert('25');
    }
    
    document.body.onkeypress = function(e){
        if (e.keyCode == 32){
            counter ++;
            arrCounter.push(1);
            console.log('spacebar pressed!');
        
            // if (counter.value >= 5){
            //     console.log('over 5!');
            // }
            if (arrCounter.length == 5){
                console.log('over 5!');
            }
            else if (arrCounter.length == 10){
                console.log('over 10');
            }
        }
    }
        

}
spaceCounter();

