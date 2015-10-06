/**control timer**/
			var ct_rate = bpm_to_ms(60)*5;
			var ct_counter = -1;
			var ct_newBpm = bpm;
			var controlTimer = T("interval", ct_rate, function() {
				//ct_rate = bpm*5000;
				controlTimer.interval = 250 * (Math.random()+5); //0.5-2.5s
				var ob = bpm_to_ms(oldMelody[8]);
				var nb = bpm_to_ms(newMelody[8]);
				var bpmSlice = (nb-ob)/7; //each step of the counter it'll increase by this much
				console.log(ob+" "+nb+", "+bpmSlice);

				switch (ct_counter) {
					case -1:
						//console.log("-1");
						ct_newBpm = bpm;
						break;
					case 0:
						hat_data = newMelody[0];
						$("#hat_text").val(hat_data);
						break;
					case 1:
						snare_data = newMelody[1];
						$("#snare_text").val(snare_data);
						break;
					case 2:
						kick_data = newMelody[2];
						$("#kick_text").val(kick_data);
						break;
					case 3:
						noise_data = newMelody[3];
						$("#noise_text").val(noise_data);
						break;
					case 6: //6th, not 4th (just so melody is the last one to change)
						h_seq_string = newMelody[4];
						$("#h_seq_text").val(h_seq_string);
						hat_sequence = $("#h_seq_text").val().split(" ").map(atof);
						// hat_synth.freq = hat_sequence;
						break;
					case 5:
						s_seq_string = newMelody[5];
						$("#s_seq_text").val(s_seq_string);
						snare_sequence = $("#s_seq_text").val().split(" ").map(atof);
						// snare_synth.freq = snare_sequence;
						break;
					case 4: //4th, not 6th
						k_seq_string = newMelody[6];
						$("#k_seq_text").val(k_seq_string);
						kick_sequence = $("#k_seq_text").val().split(" ").map(atof);
						// kick_synth.freq = kick_sequence;
						break;
					case 7:
						n_seq_string = newMelody[7];
						$("#n_seq_text").val(n_seq_string);
						noise_sequence = $("#n_seq_text").val().split(" ").map(atof);
						noise_synth.freq = noise_sequence;
	

						$("#bpm_text").val(newMelody[8]);

						/*hat_index = 0;
						snare_index = 0;
						kick_index = 0;
						noise_index = 0;*/
						ct_counter = -1;
						break;
				}

				if (ct_counter >= 0) {
					ct_counter++;
					console.log("before "+bpm);
					bpm += bpmSlice;
					console.log("after " + bpm);
					timer.interval = bpm;
					//$("#bpm_text").val(ct_newBpm-=bpmSlice);
				}
				// updateAll();

				//checking mute/unmute
				// if ($("#h_active").attr("checked")) {
				// 	hat_synth.mul = amp;
				// }
				// else {
				// 	hat_synth.mul = 0;
				// }
				// if ($("#s_active").attr("checked")) {
				// 	snare_synth.mul = amp;
				// }
				// else {
				// 	snare_synth.mul = 0;
				// }
				// if ($("#k_active").attr("checked")) {
				// 	kick_synth.mul = amp;
				// }
				// else {
				// 	kick_synth.mul = 0;
				// }
				// if ($("#n_active").attr("checked")) {
				// 	noise_synth.mul = amp;
				// }
				// else {
				// 	noise_synth.mul = 0;
				// }

			});
			controlTimer.start();

			//var synth  = T("fami", 440, 0.5);