function set_tracks(rh, rs, rk, rn, ph, ps, pk, pn, b) {
	$("#hat_text").val(rh);
	$("#snare_text").val(rs);
	$("#kick_text").val(rk);
	$("#noise_text").val(rn);


	$("#h_seq_text").val(ph);
	$("#s_seq_text").val(ps);
	$("#k_seq_text").val(pk);
	$("#n_seq_text").val(pn);

	$("#bpm_text").val(b);


	//toggle these on/off depending on whether you want them that way. e.g. 
	/*
	hat_index = 0;
	snare_index = 0;
	kick_index = 0;
	noise_index = 0;
	*/

	updateAll();
}

function transform_tracks(rh, rs, rk, rn, ph, ps, pk, pn, b) {
	//set gears in motion for iterative transformation
	oldMelody = newMelody;
	newMelody = [rh, rs, rk, rn, ph, ps, pk, pn, b];
	ct_counter = 0;
	
	//update audio
	//updateAll();
}

//bpm to ms
function bpm_to_ms(b) {
	return (1000/(b/60))/4; //4 because we're at 16thnotes, which is 1/4 of a quarter note (the bpm val)
}
function ms_to_bpm(m) {
	return ((m/1000)*60);
}

function atof(a) {
	var note = "C";
	var octave = "0";
	var note_arr = a.match(/[A-Za-z]+/g);
	var octave_arr = a.match(/\d+/g);

	if (note_arr && note_arr.length > 0) {
		note = note_arr[0];
		console.log("note is " + note);
	}
	if (octave_arr && octave_arr.length > 0) {
		octave = octave_arr[0];
	}

	var note_names = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
	var offset = note_names.indexOf(note);
	var multiplier = octave*12 + 12;

	console.log(offset + " + " + multiplier + " = " + (offset+multiplier));
	return mtof(offset + multiplier);

}

//converts midi to hz
function mtof(midi)
{
	var freq = (440 / 32) * (Math.pow(2,((midi - 9) / 12)));
	return freq;
}

//poll/update
function updateAll() {
	//rhythm
	if ($("#hat_text").val()) {
		hat_data = $("#hat_text").val();
	}
	if ($("#snare_text").val()) {
		snare_data = $("#snare_text").val();
	}
	if ($("#kick_text").val()) {
		kick_data = $("#kick_text").val();
	}
	if ($("#noise_text").val()) {
		noise_data = $("#noise_text").val();
	}

	//pitch				
	if ($("#h_seq_text").val() && $("#h_seq_text").val()!=h_seq_string) {
		h_seq_string = $("#h_seq_text").val();
		hat_sequence = $("#h_seq_text").val().split(" ").map(atof);
		hat_synth.freq.value = hat_sequence;
		// hat_synth.freq.bang();
	}
	if ($("#s_seq_text").val() && $("#s_seq_text").val() != s_seq_string) {
		s_seq_string = $("#s_seq_text").val();
		snare_sequence = $("#s_seq_text").val().split(" ").map(atof);
		snare_synth.freq = snare_sequence;
		//snare_synth.freq.bang();
	}
	if ($("#k_seq_text").val() && $("#k_seq_text").val() != k_seq_string) {
		k_seq_string = $("#k_seq_text").val();
		kick_sequence = $("#k_seq_text").val().split(" ").map(atof);
		kick_synth.freq = kick_sequence;
		//kick_synth.freq.bang();
	}
	if ($("#n_seq_text").val() && $("#n_seq_text").val() != n_seq_string) {
		n_seq_string = $("#n_seq_text").val();
		noise_sequence = $("#n_seq_text").val().split(" ").map(atof);
		noise_synth.freq = noise_sequence;
	}
	
	//glob
	bpm = bpm_to_ms($("#bpm_text").val());
	timer.interval = bpm;			

}

//timer -> synth on or off (dep on code in)
function onOff(data, synth, i, seq, seq_i, disp) {

	//console.log(i);
	//check rhythm
	if (data[i] == "1") {
		synth.mul = amp;
		// seq.bang();
		// synth.freq.value = seq[seq.length % seq_i];
		// console.log(seq.length + ' % ' + seq_i + ' = ' + seq.length%seq_i);

		//set freq based on seq
		synth.freq.value = seq[seq_i];
		if (seq_i >= seq.length-1) {
			seq_i = 0;
		}
		else {
			seq_i++;
		}
		console.log(synth.freq.value);
		// console.log(seq);
		disp.css("visibility", "visible");
	}
	//check rhythm
	else if (data[i] == "X" || data[i] == "x") {
		var dice = Math.random();
		if (dice > 0.5) {
			synth.mul = amp;
			// seq.bang();
			// synth.freq = seq[seq.length % seq_i];

			//set freq
			synth.freq.value = seq[seq_i];
			if (seq_i >= seq.length-1) {
				seq_i = 0;
			}
			else {
				seq_i++;
			}
			disp.css("visibility", "visible");
		}
		else {
			synth.mul = 0;
			disp.css("visibility", "hidden");
		}
	}
	else {
		synth.mul = 0;
		disp.css("visibility", "hidden");
	}

	//set rhythm index
	if (i>=data.length-1) {
		i = 0;
	}
	else {
		i++;
	}
	return {"data_idx": i, "seq_idx": seq_i}; //use obj for easier editing
}

//play all
function playAll() {
	hat_synth.play();
	snare_synth.play();
	kick_synth.play();
	noise_synth.play();
	timer.start();
}

//pause all
function pauseAll() {
	hat_synth.pause();
	snare_synth.pause();
	kick_synth.pause();
	noise_synth.pause();
	timer.stop();
	hat_index = 0;
	snare_index = 0;
	kick_index = 0;
	noise_index = 0;
	h_seq_idx = 0;
	s_seq_idx = 0;
	k_seq_idx = 0;
	n_seq_idx = 0;


	// hat_synth.freq = hat_sequence;
	// snare_synth.freq = snare_sequence;
	// kick_synth.freq = kick_sequence;
	// noise_synth.freq = noise_sequence;

	/*
	hat_synth.freq.index = 0;
	snare_synth.freq.index = 0;
	kick_synth.freq.index = 0;
	*/
}


//octave functions; only goes from 0-10
//you gotta press enter after to acutally update
function octDown(s, box) {
	var ns = s;
	ns = ns.replace(/1/g, "0");
	ns = ns.replace(/2/g, "1");
	ns = ns.replace(/3/g, "2");
	//console.log(ns);
	ns = ns.replace(/4/g,"3");
	ns = ns.replace(/5/g, "4");
	ns = ns.replace(/6/g, "5");
	ns = ns.replace(/7/g,"6");
	ns = ns.replace(/8/g, "7");
	ns = ns.replace(/9/g, "8");
	ns = ns.replace(/10/g,"9");
	console.log(ns);

	box.val(ns);
}

function octUp(s, box) {
	var ns = s;
	ns = ns.replace(/9/g, "10");
	ns = ns.replace(/8/g, "9");
	//console.log(ns);
	ns = ns.replace(/7/g,"8");
	ns = ns.replace(/6/g, "7");
	ns = ns.replace(/5/g, "6");
	ns = ns.replace(/4/g,"5");
	ns = ns.replace(/3/g, "4");
	ns = ns.replace(/2/g, "3");
	ns = ns.replace(/1/g,"2");
	ns = ns.replace(/0/g,"1");
	//console.log(ns);

	box.val(ns);
}

//Snapshots
function snapshot_save() {
	var snapshot = [$("#hat_text").val(), $("#snare_text").val(), $("#kick_text").val(), $("#noise_text").val(), $("#h_seq_text").val(), $("#s_seq_text").val(), $("#k_seq_text").val(), $("#n_seq_text").val(), $("#bpm_text").val()];
	return snapshot;
}

function snapshot_set(snapshot) {
	var s = snapshot;
	set_tracks(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7], s[8]);
}


//Random gens
function random_rhythm() {
	var max = 4000000; //4 million
	return (Math.floor(Math.random()*max)).toString(2); //gen rand binary
}

function random_pitch() {
	var max_length = 12;
	var max_octave = 5;
	var seq = "";
	var pitches = ["A","Bb","C","Db","D","Eb","E","F","Gb","G"];
	for (var i=0; i<max_length; i++) {
		var p = pitches[Math.floor(Math.random()*pitches.length)];
		var o = Math.floor(Math.random()*max_octave);
		seq += p + o + " ";
	}
	seq = seq.slice(0, -1); //trim last space
	return seq;
}