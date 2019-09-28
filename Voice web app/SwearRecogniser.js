const recognisedSwears = ['fuck', 'f***', 's***', 'cunt', 'c***', 'fuken', 'fuk', 'shit', 'fucken', 'f*****']

export class SwearRecogniser{
    checkForSwears(text) {
        let swearCount = 0 //Number fo recognised sweard words

        recognisedSwears.forEach(swear => { //Check the text for each recognised swear word
            if(text.includes(swear)){
                swearCount ++; // Increment swear counter
            }
        })

        if (swearCount > 0) { //If user was caught swearing, trigger function
            this.swearRecognised();
        }
    }


    swearRecognised(){
        console.log("Swear word triggered");
        var audio = new Audio("./sounds/Cha-ching-sound.mp3");
        audio.play();

        var promise =  audio.play();

        if (promise !== undefined) {
            promise.then(_ => {
                // Autoplay started!
            }).catch(error => {
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
                Console.log("Error playing audio: {}")
            });
        }




        // TODO: Insert API call here
        // TODO: Update UI here
      }
}

