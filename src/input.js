function pianoInput(note) {
	var chk = $('input[name="select"]:checked').val();
	//var 

	if (chk=="h") {
		if ($("#h_seq_text").val() == "") {
			$("#h_seq_text").val(note);
		}
		else {
			$("#h_seq_text").val($("#h_seq_text").val()+" "+note);
		}
	}
	else if (chk=="s") {
		if ($("#s_seq_text").val() == "") {
			$("#s_seq_text").val(note);
		}
		else {
			$("#s_seq_text").val($("#s_seq_text").val()+" "+note);
		}
	}
	else if (chk=="k") {
		if ($("#k_seq_text").val() == "") {
			$("#k_seq_text").val(note);
		}
		else {
			$("#k_seq_text").val($("#k_seq_text").val()+" "+note);
		}
	}
	else if (chk=="n") {
		if ($("#n_seq_text").val() == "") {
			$("#n_seq_text").val(note);
		}
		else {
			$("#n_seq_text").val($("#n_seq_text").val()+" "+note);
		}
	}

	//updateAll();
	console.log(note);

}




/** GEO <--> MELODY **/
//incl. locations
var LOC_MARGIN = 0.005;
var EC_LAT = 40.007;
var EC_LON = -73.959;

function det_melody(lat, lon) {
	//hard-coded positions

	//EC
	if (Math.abs(lat - EC_LAT) < LOC_MARGIN && Math.abs(lon - EC_LON) < LOC_MARGIN) {
		dax = 1;
	}
	else {
		dax = 0;
	}
}

//controls
//incl. focus shortcuts
//keyup so that  "focus" functions will happen after key is pressed
//next is m,./

var macro_keys = [01,07,69,02, 65,03,60,70, 71,67,66,01];
$("body").keyup(function(e) { 

	console.log(e.keyCode);

	//var backspace = jQuery.Event("keydown", { keyCode: 20 });

	if (e.keyCode == 71 || e.keyCode==13) { //G or ENTER to updateAll
		//$(":focus").val($(":focus").val().slice(0,-1));
		updateAll();
	}
	else if (e.keyCode == 190) { //. to play
		playAll();
	}
	else if (e.keyCode == 188) { //, to pause
		pauseAll();
	}
	// else if (e.keyCode == 39) { // cresc
	// 	cresc();
	// }
	// else if (e.keyCode == 37) { // decresc
	// 	decresc();
	// }
	else if (e.keyCode == 67) { //C to clear all
		//console.log($(":focus")[0]);
		$(":focus").val("");
	}
	else if (e.keyCode == 66) { //B to backspace to the prev space
		var cur = $(":focus").val().split(" ");
		cur.pop();
		$(":focus").val(cur.join(" "));
	}
	else if (e.keyCode == 01) { //Q
		var t = $("#hat_text").val();
		$("#hat_text").focus();
		$("#hat_text").val(t);
	}
	else if (e.keyCode == 07) { //W
		var t = $("#snare_text").val();
		$("#snare_text").focus();
		$("#snare_text").val(t);
	}
	else if (e.keyCode == 69) { //E
		var t = $("#kick_text").val();
		$("#kick_text").focus();
		$("#kick_text").val(t);
	}
	else if (e.keyCode == 02) { //R
		var t = $("#noise_text").val();
		$("#noise_text").focus();
		$("#noise_text").val(t);
	}
	else if (e.keyCode == 65) { //A
		var t = $("#h_seq_text").val();
		$("#h_seq_text").focus();
		$("#h_seq_text").val(t);
		$("#h_select").attr("checked", "checked");
	}
	else if (e.keyCode == 03) { //S
		var t = $("#s_seq_text").val();
		$("#s_seq_text").focus();
		$("#s_seq_text").val(t);
		$("#s_select").attr("checked", "checked");
	}
	else if (e.keyCode == 60) { //D
		var t = $("#k_seq_text").val();
		$("#k_seq_text").focus();
		$("#k_seq_text").val(t);
		$("#k_select").attr("checked", "checked");
	}
	else if (e.keyCode == 70) { //F
		var t = $("#n_seq_text").val();
		$("#n_seq_text").focus();
		$("#n_seq_text").val(t);
		$("#n_select").attr("checked", "checked");
	}
});
$("#play").click(function() {playAll();});
$("#pause").click(function() {pauseAll();});
$("#clear").click(function() {
	set_tracks("0","0","0","0","A3","A2","A1","A3",$("#bpm_text").val());
	updateAll();
});


//presets
$("#preset_gp0").click(function() {gp0();});
$("#preset_gp1").click(function() {gp1();});
$("#preset_gp2").click(function() {gp2();});
$("#preset_roar").click(function() {roar();});
$("#preset_randomScales").click(function() {randomScales();});
$("#preset_giveDrummer").click(function() {giveDrummer();});
$("#preset_longTones").click(function() {
	console.log("long tones");

	//for seamless transition
	hat_index = 0;
	snare_index = 0;
	kick_index = 0;
	noise_index = 0;

	set_tracks("1", "1", "1", "1", random_pitchSingle(), random_pitchSingle(), random_pitchSingle(), random_pitchSingle(), $("#bpm_text").val());
});

//12/13

//cresc/decresc
var mul_increment = 0.01
// var synths = [hat_synth, snare_synth, kick_synth, noise_synth];
function cresc() {
	// for (var i=0; i<synths.length; i++) {
	// 	var synth = synths[i];
	// 	synth.mul += mul_increment;
	// }
	hat_synth.mul += mul_increment;
	snare_synth.mul += mul_increment;
	kick_synth.mul += mul_increment;
	noise_synth.mul += mul_increment;
	console.log(hat_synth.mul);

}
function decresc() {
	// for (var i=0; i<synths.length; i++) {
	// 	var synth = synths[i];
	// 	if (synth.mul > 0) {
	// 		synth.mul -= mul_increment;
	// 	}
	// 	else {
	// 		synth.mul = 0;
	// 	}
	// }
	hat_synth.mul -= mul_increment;
	snare_synth.mul -= mul_increment;
	kick_synth.mul -= mul_increment;
	noise_synth.mul -= mul_increment;
	console.log(hat_synth.mul);
}

function A2() {
	set_tracks("10100", "X", "10010", "1010X100", "Eb4 E4 D1 E2 Db0 Eb3 Eb2 G2 D3 F3 Gb1 A0", "Gb2 D3 E0 Gb2 D0 F3 Bb2 E1 Bb4 G1 A0 C4", "Eb1 E1 D0 E0 Db0 Eb0 Eb0 G0 D0 F0 Gb0 A0", "Eb1 E1 D0 E0 Db0 Eb0 Eb0 G0 D0 F0 Gb0 A0", $("#bpm_text").val());
}

function B() {
	set_tracks("1", "1", "1", "1", "C0", "C0", "C0", "C0", $("#bpm_text").val());
}

function B1() {
	set_tracks("1", "X", "X", "X", "C0", "C1 Gb0 Ab0", "C0 G0 Eb0", "C0 B0 A0", $("#bpm_text").val());
}

function B2() {
	set_tracks("1", "1", "1", "1", "C8", "C8", "C8", "C8", $("#bpm_text").val());
}

function B3() {
	set_tracks("1", "1", "1", "1", "Db7", "Db7", "C9", "G9", $("#bpm_text").val());
}

function B5() {
	set_tracks("111000", "111000", "111000", "111000", "A3", "Db1", "Bb3", "F1", $("#bpm_text").val());
}

//controls for keyboard shortcuts macros
$("#hat_text").keyup(function(e) {
	if (macro_keys.indexOf(e.keyCode) != -1) {
		//this.value=this.value.replace(/[jkl;uiopr]/,'');
		var t = $("#hat_text").val().slice(0,-1);
		$("#hat_text").val(t);
	}
});
$("#snare_text").keyup(function(e) {
	if (macro_keys.indexOf(e.keyCode) != -1) {
		//this.value=this.value.replace(/[jkl;uiopr]/,'');
		var t = $("#snare_text").val().slice(0,-1);
		$("#snare_text").val(t);
	}
});
$("#kick_text").keyup(function(e) {
	if (macro_keys.indexOf(e.keyCode) != -1) {
		//this.value=this.value.replace(/[jkl;uiopr]/,'');
		var t = $("#kick_text").val().slice(0,-1);
		$("#kick_text").val(t);
	}
});
$("#noise_text").keyup(function(e) {
	if (macro_keys.indexOf(e.keyCode) != -1) {
		//this.value=this.value.replace(/[jkl;uiopr]/,'');
		var t = $("#noise_text").val().slice(0,-1);
		$("#noise_text").val(t);
	}
});
$("#h_seq_text").keyup(function(e) {
	if (macro_keys.indexOf(e.keyCode) != -1) {
		//this.value=this.value.replace(/[jkl;uiopr]/,'');
		var t = $("#h_seq_text").val().slice(0,-1);
		$("#h_seq_text").val(t);
	}
});
$("#s_seq_text").keyup(function(e) {
	if (macro_keys.indexOf(e.keyCode) != -1) {
		//this.value=this.value.replace(/[jkl;uiopr]/,'');
		var t = $("#s_seq_text").val().slice(0,-1);
		$("#s_seq_text").val(t);
	}
});
$("#k_seq_text").keyup(function(e) {
	if (macro_keys.indexOf(e.keyCode) != -1) {
		//this.value=this.value.replace(/[jkl;uiopr]/,'');
		var t = $("#k_seq_text").val().slice(0,-1);
		$("#k_seq_text").val(t);
	}
});
$("#n_seq_text").keyup(function(e) {
	if (macro_keys.indexOf(e.keyCode) != -1) {
		//this.value=this.value.replace(/[jkl;uiopr]/,'');
		var t = $("#n_seq_text").val().slice(0,-1);
		$("#n_seq_text").val(t);
	}
});


//controls for octavebuttons
$("#h_octDown").click(function() {octDown($("#h_seq_text").val(), $("#h_seq_text")); updateAll();});
$("#h_octUp").click(function() {octUp($("#h_seq_text").val(), $("#h_seq_text")); updateAll();});
$("#s_octDown").click(function() {octDown($("#s_seq_text").val(), $("#s_seq_text")); updateAll();});
$("#s_octUp").click(function() {octUp($("#s_seq_text").val(), $("#s_seq_text")); updateAll();});
$("#k_octDown").click(function() {octDown($("#k_seq_text").val(), $("#k_seq_text")); updateAll();});
$("#k_octUp").click(function() {octUp($("#k_seq_text").val(), $("#k_seq_text")); updateAll();});
$("#n_octDown").click(function() {octDown($("#n_seq_text").val(), $("#n_seq_text")); updateAll();});
$("#n_octUp").click(function() {octUp($("#n_seq_text").val(), $("#n_seq_text")); updateAll();});



//controls for snapshots
$("#snapshot1_save").click(function() {
	snapshot1 = snapshot_save();
});
$("#snapshot2_save").click(function() {
	snapshot2 = snapshot_save();
});
$("#snapshot3_save").click(function() {
	snapshot3 = snapshot_save();
});

$("#snapshot1_set").click(function() {
	snapshot_set(snapshot1);
});
$("#snapshot2_set").click(function() {
	snapshot_set(snapshot2);
});
$("#snapshot3_set").click(function() {
	snapshot_set(snapshot3);
});


//Random functions! YAY!!
$("#random").click(function() {
	//all random
	// set_tracks(random_rhythm(), random_rhythm(), random_rhythm(), random_rhythm(), random_pitch(), random_pitch(), random_pitch(), random_pitch(), Math.floor(Math.random()*100)+60);
	
	//keep bpm
	set_tracks(random_rhythm(), random_rhythm(), random_rhythm(), random_rhythm(), random_pitch(), random_pitch(), random_pitch(), random_pitch(), $("#bpm_text").val());
});


//Tap tempo
$("#tap").click(function() {
	TapForBPM();
});