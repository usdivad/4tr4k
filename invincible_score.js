/**
 *
 * The conductor sets down his wand. The curtains draw open. Pistols fire in the air as the Doctor prepares.
 * "There is no more innovation," he spits while dragging his white-tailed feet along the coliseum floor.
 * "Soon I will be invincible..." 
 *
 **/
function play_invincible() {
    /* Score parameters */
    // The conductor sets down his wand.
    playAll();
    var beat = 2000; //Quarter note = 2s
    var total_sections = 15; //15 sections in total
    var text = "one hath not yet wanted sweet nectar of dancing drunkenly for globalization affects charm and wit";
    var text_arr = text.split(" ");

    /* Introduction */
    // Pistols draw in the air as the doctor prepares.
    trigger(function(){set_tracks("0", "1000000000100000000100000001000000100000100001000100101X1X1X1X1X11X111X1111X11111X", "0", "0", "Bb1", "Bb2", "Bb2", "begin", "500");}, 0); //taiko accelerando
   
    /* Part I */
    // "There is no more innovation," he spits...
    for (var i=0; i<=total_sections; i++) { // ||: (16x)
        function invincible_helper(section_number) {
            trigger(function() {play_section(section_number);}, beat*(section_number+1));
        }
        invincible_helper(i); //Proceed to the next section

    } // :||

    /* Part II */
    // ... while dragging his white-tailed feet...
    var beat_offset = (beat*total_sections);
    for (var i=0; i<=total_sections; i=i+2) { // ||: (8x)
        (function(n) {
            trigger(function(){play_section(n);}, beat_offset+beat*(n+1));
        })(i);
    } // :||

    /* Part III */
    // ... along the coliseum floor.
    beat_offset = (beat * total_sections * 2); // ||: (8x)
    for (var i=total_sections; i>0; i=i-2) {
        (function(n) {
            trigger(function(){play_section(n);}, beat_offset+beat*(total_sections-(n+1)));
        })(i);
    } // :||

    /* Coda */
    // "Soon I will be invincible..."
    trigger(function(){play_section(15);}, beat*total_sections*3);


    /*
     * (Helper functions)
     */
    function trigger(funk, delay) {
        var trig = window.setTimeout(funk, delay);
        console.log(delay);
    }

    function play_section(i) {
        var id = "#section" + i;
        $(id).trigger("click");
        console.log(id + " (sim)clicked!");
        console.log(text_arr[i]);
    }
}

//it's no consolation
led feet along the coliseum floor.\n"Soon I will be invincible..."');
    play_invincible();
});