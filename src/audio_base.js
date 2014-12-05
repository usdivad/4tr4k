//audio
//timbre.utils.exports("atof");
var h_seq_string = $("#h_seq_text").val();
var s_seq_string = $("#s_seq_text").val();
var k_seq_string = $("#k_seq_text").val();
var n_seq_string = $("#n_seq_text").val();

var hat_sequence = T($("#h_seq_text").val().split(" ").map(atof));
var snare_sequence = T($("#s_seq_text").val().split(" ").map(atof));
var kick_sequence = T($("#k_seq_text").val().split(" ").map(atof));
var noise_sequence = T($("#n_seq_text").val().split(" ").map(atof));
//var synth  = T("fami", pitch_array, 0.5);

//DIFFERENT AGES vars
var dax = 0;


//Timer indices
var bpm = bpm_to_ms($("#bpm_text").val());
var amp = 0.2;
var noise_mul = 100;

var hat_index = 0;
var snare_index = 0;
var kick_index = 0;
var noise_index = 0;

var hat_data = "0";
var snare_data = "0";
var kick_data = "0";
var noise_data = "0";

var hat_synth  = T("pulse", hat_sequence, amp);
var snare_synth  = T("pulse", snare_sequence, amp);
var kick_synth  = T("pulse", kick_sequence, amp);
var noise_synth  = T("fnoise", noise_sequence, amp);

var oldMelody = [hat_data, snare_data, kick_data, noise_data, h_seq_string, s_seq_string, k_seq_string, n_seq_string, bpm];
var newMelody = oldMelody;

/*hat_synth.onbang = function() {
	pitch_array.bang();
	console.log(pitch_array);
};*/

//var hat_array = T(hat_data.split(" "));
var timer = T("interval", bpm, function() {
	hat_index = onOff(hat_data, hat_synth, hat_index, hat_sequence, h_box);
	snare_index = onOff(snare_data, snare_synth, snare_index, snare_sequence, s_box);
	kick_index = onOff(kick_data, kick_synth, kick_index, kick_sequence, k_box);
	noise_index = onOff(noise_data, noise_synth, noise_index, noise_sequence, n_box);
	//updateAll();

});


//Snapshot vars
var snapshot1 = [];
var snapshot2 = [];
var snapshot3 = [];