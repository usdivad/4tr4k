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
			var EC_LAT = 40.807;
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
			$("body").keyup(function(e) { 

				//var backspace = jQuery.Event("keydown", { keyCode: 20 });

				if (e.keyCode == 13) { //ENTER to updateAll
					updateAll();
				}
				else if (e.keyCode == 85) { //U
					var t = $("#hat_text").val();
					$("#hat_text").focus();
					$("#hat_text").val(t);
				}
				else if (e.keyCode == 73) { //I
					var t = $("#snare_text").val();
					$("#snare_text").focus();
					$("#snare_text").val(t);
				}
				else if (e.keyCode == 79) { //o
					var t = $("#kick_text").val();
					$("#kick_text").focus();
					$("#kick_text").val(t);
				}
				else if (e.keyCode == 80) { //P
					var t = $("#noise_text").val();
					$("#noise_text").focus();
					$("#noise_text").val(t);
				}
				else if (e.keyCode == 74) { //J
					var t = $("#h_seq_text").val();
					$("#h_seq_text").focus();
					$("#h_seq_text").val(t);
					$("#h_select").attr("checked", "checked");
				}
				else if (e.keyCode == 75) { //K
					var t = $("#s_seq_text").val();
					$("#s_seq_text").focus();
					$("#s_seq_text").val(t);
					$("#s_select").attr("checked", "checked");
				}
				else if (e.keyCode == 76) { //L
					var t = $("#k_seq_text").val();
					$("#k_seq_text").focus();
					$("#k_seq_text").val(t);
					$("#k_select").attr("checked", "checked");
				}
				else if (e.keyCode == 186) { //;
					var t = $("#n_seq_text").val();
					$("#n_seq_text").focus();
					$("#n_seq_text").val(t);
					$("#n_select").attr("checked", "checked");
				}
			});
			$("#play").click(function() {playAll();});
			$("#pause").click(function() {pauseAll();});
			$("#preset_gp0").click(function() {gp0();});
			$("#preset_gp1").click(function() {gp1();});
			$("#preset_gp2").click(function() {gp2();});
			$("#preset_roar").click(function() {roar();});
			$("#preset_randomScales").click(function() {randomScales();});
			$("#preset_giveDrummer").click(function() {giveDrummer();});


			//controls for keyboard shortcuts macros
			$("#hat_text").keyup(function(e) {
				if (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 79 || e.keyCode == 80 || e.keyCode == 74 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 186) {
					//this.value=this.value.replace(/[jkl;uiopr]/,'');
					var t = $("#hat_text").val().replace(/[jkl;JKL;uioprUIOPR]/,"");
					$("#hat_text").val(t);
				}
			});
			$("#snare_text").keyup(function(e) {
				if (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 79 || e.keyCode == 80 || e.keyCode == 74 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 186) {
					//this.value=this.value.replace(/[jkl;uiopr]/,'');
					var t = $("#snare_text").val().replace(/[jkl;JKL;uioprUIOPR]/,"");
					$("#snare_text").val(t);
				}
			});
			$("#kick_text").keyup(function(e) {
				if (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 79 || e.keyCode == 80 || e.keyCode == 74 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 186) {
					//this.value=this.value.replace(/[jkl;uiopr]/,'');
					var t = $("#kick_text").val().replace(/[jkl;JKL;uioprUIOPR]/,"");
					$("#kick_text").val(t);
				}
			});
			$("#noise_text").keyup(function(e) {
				if (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 79 || e.keyCode == 80 || e.keyCode == 74 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 186) {
					//this.value=this.value.replace(/[jkl;uiopr]/,'');
					var t = $("#noise_text").val().replace(/[jkl;JKL;uioprUIOPR]/,"");
					$("#noise_text").val(t);
				}
			});
			$("#h_seq_text").keyup(function(e) {
				if (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 79 || e.keyCode == 80 || e.keyCode == 74 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 186) {
					//this.value=this.value.replace(/[jkl;uiopr]/,'');
					var t = $("#h_seq_text").val().replace(/[jkl;JKL;uioprUIOPR]/,"");
					$("#h_seq_text").val(t);
				}
			});
			$("#s_seq_text").keyup(function(e) {
				if (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 79 || e.keyCode == 80 || e.keyCode == 74 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 186) {
					//this.value=this.value.replace(/[jkl;uiopr]/,'');
					var t = $("#s_seq_text").val().replace(/[jkl;JKL;uioprUIOPR]/,"");
					$("#s_seq_text").val(t);
				}
			});
			$("#k_seq_text").keyup(function(e) {
				if (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 79 || e.keyCode == 80 || e.keyCode == 74 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 186) {
					//this.value=this.value.replace(/[jkl;uiopr]/,'');
					var t = $("#k_seq_text").val().replace(/[jkl;JKL;uioprUIOPR]/,"");
					$("#k_seq_text").val(t);
				}
			});
			$("#n_seq_text").keyup(function(e) {
				if (e.keyCode == 85 || e.keyCode == 73 || e.keyCode == 79 || e.keyCode == 80 || e.keyCode == 74 || e.keyCode == 75 || e.keyCode == 76 || e.keyCode == 186) {
					//this.value=this.value.replace(/[jkl;uiopr]/,'');
					var t = $("#n_seq_text").val().replace(/[jkl;JKL;uioprUIOPR]/,"");
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