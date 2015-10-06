//audio
//timbre.utils.exports("atof");
var h_seq_string = $("#h_seq_text").val();
var s_seq_string = $("#s_seq_text").val();
var k_seq_string = $("#k_seq_text").val();
var n_seq_string = $("#n_seq_text").val();

var hat_sequence = $("#h_seq_text").val().split(" ").map(atof);
var snare_sequence = $("#s_seq_text").val().split(" ").map(atof);
var kick_sequence = $("#k_seq_text").val().split(" ").map(atof);
var noise_sequence = $("#n_seq_text").val().split(" ").map(atof);
//var synth  = T("fami", pitch_array, 0.5);

var h_active = $("#h_active").attr("checked");
var s_active = $("#s_active").attr("checked");
var k_active = $("#k_active").attr("checked");
var n_active = $("#n_active").attr("checked");

if ($("#h_active").length < 1) {
    h_active=true, s_active=true, k_active=true, n_active=true;
}


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


// var h_seq_obj = {"seq": hat_sequence, "idx": 0};
// var s_seq_obj = {"seq": snare_sequence, "idx": 0};
// var k_seq_obj = {"seq": kick_sequence, "idx": 0};
// var n_seq_obj = {"seq": noise_sequence, "idx": 0};

var h_seq_idx = 0;
var s_seq_idx = 0;
var k_seq_idx = 0;
var n_seq_idx = 0;
// var seq_idx_arr = [
//                     {"seq": hat_sequence, "idx": h_seq_idx},
//                     {"seq": snare_sequence, "idx": s_seq_idx},
//                     {"seq": kick_sequence, "idx": k_seq_idx},
//                     {"seq": noise_sequence, "idx": n_seq_idx}
//                    ];

var hat_data = "0";
var snare_data = "0";
var kick_data = "0";
var noise_data = "0";

var hat_synth  = T("pulse", {freq: hat_sequence[0], mul: amp});
var snare_synth  = T("pulse", {freq: snare_sequence[0], mul: amp});
var kick_synth  = T("pulse", {freq: kick_sequence[0], mul: amp});
var noise_synth  = T("noise", {freq: noise_sequence[0], mul: amp});

var oldMelody = [hat_data, snare_data, kick_data, noise_data, h_seq_string, s_seq_string, k_seq_string, n_seq_string, bpm];
var newMelody = oldMelody;

/*hat_synth.onbang = function() {
	pitch_array.bang();
	console.log(pitch_array);
};*/

//var hat_array = T(hat_data.split(" "));
var timer = T("interval", bpm, function() {
    // console.log(hat_sequence);

    //check for mute/unmute
    h_active = $("#h_active").attr("checked");
    s_active = $("#s_active").attr("checked");
    k_active = $("#k_active").attr("checked");
    n_active = $("#n_active").attr("checked");

    if ($("#h_active").length < 1) {
        h_active=true, s_active=true, k_active=true, n_active=true;
    }

	var h_idx_obj = onOff(hat_data, hat_synth, hat_index, hat_sequence, h_seq_idx, h_active, h_box);
	var s_idx_obj = onOff(snare_data, snare_synth, snare_index, snare_sequence, s_seq_idx, s_active, s_box);
	var k_idx_obj = onOff(kick_data, kick_synth, kick_index, kick_sequence, k_seq_idx, k_active, k_box);
	var n_idx_obj = onOff(noise_data, noise_synth, noise_index, noise_sequence, n_seq_idx, n_active, n_box);

    hat_index = h_idx_obj["data_idx"];
    h_seq_idx = h_idx_obj["seq_idx"];
    console.log(h_idx_obj);
    snare_index = s_idx_obj["data_idx"];
    s_seq_idx = s_idx_obj["seq_idx"];
    kick_index = k_idx_obj["data_idx"];
    k_seq_idx = k_idx_obj["seq_idx"];
    noise_index = n_idx_obj["data_idx"];
    n_seq_idx = n_idx_obj["seq_idx"];

    // for (var i=0; i<seq_idx_arr.length; i++) {
    //     var seq = seq_idx_arr[i];
    //     s_idx = seq["idx"];
    //     s_len = seq["seq"].length;
    //     if (s_idx >= s_len-1) {
    //         s_idx = 0;
    //         console.log("over");
    //     }
    //     else {
    //         s_idx++;
    //     }
    // }

    // h_seq_idx = seq_idx_arr[0]["idx"];
    // console.log("h seq idx is " + h_seq_idx);
    // s_seq_idx = seq_idx_arr[1]["idx"];
    // k_seq_idx = seq_idx_arr[2]["idx"];
    // n_seq_idx = seq_idx_arr[3]["idx"];

    // if (h_seq_idx >= hat_sequence.length - 1) {
    //     h_seq_idx = 0;
    // }
    // else {
    //     h_seq_idx++;
    // }
    // console.log(h_seq_idx);


	//updateAll();

});


//Snapshot vars
var snapshot1 = [];
var snapshot2 = [];
var snapshot3 = [];