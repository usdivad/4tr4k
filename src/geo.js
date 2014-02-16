//geolocation
			var latitude = 40.8092104;
			var longitude = -73.962194;
			var watch_id;
			var watches = 0;

			watch_id = navigator.geolocation.watchPosition(success_handler, error_handler); //start

			function success_handler(position) {
				latitude = position.coords.latitude;
				longitude = position.coords.longitude;
				watches++;
				
				document.getElementById("latitude_display").innerHTML = "latitude: "+latitude;
				document.getElementById("longitude_display").innerHTML = "longitude: "+longitude;
				document.getElementById("num_watches").innerHTML = "number of watches: "+watches;

				//musical action goes here
				det_melody(latitude, longitude);

			}

			function error_handler(error) {
				console.log(error);
			}

			//acceleration
			var acc = 0;
			if (window.DeviceMotionEvent) {
				window.addEventListener("devicemotion", function(event) {
					var ax = event.acceleration.x;
					var ay = event.acceleration.y;
					var az = event.acceleration.z;

					acc = (Math.abs(ax)+Math.abs(ay)+Math.abs(az))/3;
					document.getElementById("acceleration_display").innerHTML = "acc: "+acc;
				}, true);
			}
