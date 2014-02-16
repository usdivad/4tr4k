/** COMPOSED WRITTEN SECTIONS **/


			//boom();

			//glass pagoda
			function gp0() {
				//set_tracks('110010101010110011', '1XXX', '1000100X101011XXXX', '100010010110100011', 'C4 C4 C4 C4 A3 G3 E3 E3 D4 D4', 'E2 E2 G2 G2', 'A1 A1 C2 D2 G1 C2', 'A3 A7 A7 A6 A3 A7 A6 A5', '180');

				transform_tracks('110010101010110011', '1XXX', '1000100X101011XXXX', '100010010110100011', 'C4 C4 C4 C4 A3 G3 E3 E3 D4 D4', 'E2 E2 G2 G2', 'A1 A1 C2 D2 G1 C2', 'A3 A7 A7 A6 A3 A7 A6 A5', '180');
			}
			function gp1() {
				//Math.random()*10+70
				transform_tracks('X', '011111111111', '1', '101011101111', 'A3 G3 A3 E3', 'G2 E3 C3 C3 G2 E3 C3 C3 G2 E3 C3', 'A1 A1 A1 A1 G1 G1 G1 E2 E2 C2 C2 C2', 'A2 D5 A2 C3 D5 A2 D5 B4 D5', Math.random()*10+70);
			}

			function gp2() {
				transform_tracks('10011001101X', '00X0', '10X10XX', '10100110X0X10X10X', 'D3 E3 F3 G3 C3 D3', 'D2 B2 G2 G2', 'G1 G2 C2 G0 D2 G2', 'D4 D3 D7 D5 D4 D7 D3 D2 D8', Math.random()*10+90);
			}

			//school
			function roar() {
				transform_tracks('1', '0000X0', '110000', '1000X01000X010X0101000X0', 'C4 C4 C4 C4 C4 C4 G3 G3 G3 A3 A3 A3 E3 E3 E3 E3 E3 E3 F3 F3 F#3 F#3 G3 G3', 'G2 E2 C3', 'C2 C2 G1 G1', 'G6', '200'); //180bpm
			}

			function randomScales() {
				transform_tracks('X', 'X', 'X', '0', 'C3 D3 E3 F3 G3 A3 B3 C4', 'C2 D2 E2 F2 G2 A2 B2 C3', 'C1 D1 E1 F1 G1 A1 B1 C2', 'A1', '100');
			}

			function giveDrummer() {
				transform_tracks('0', '0', '0', '10100010100010101110101010100011', 'C3 G3', 'E2 A2', 'A1 C2', 'A1 A1 A7 A5 A7 A5 C5 C5 A5 A1 A7 A5 A4 A6 A6', '260');
			}