// var hotel = {
//	name: "Quay",
//	rooms: 40,
//	booked: 25,
//	pool: true,
//	checkAvailability: function() {
//		return this.rooms - this.booked;
//	}
//};

//hotel.name = "Park";
//hotel.rooms = 120;
//hotel.booked = 77;
//delete hotel.pool;

/*
function Hotel(name, rooms, booked, pool) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.pool = pool;
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	};
}

var quayHotel = new Hotel("Quay", 40, 25, false);
var parkHotel = new Hotel("Park", 120, 77, true);

var elName = document.getElementById('hotelName');
elName.textContent = parkHotel.name;

var elRooms = document.getElementById("roomsAvailable");
elRooms.textContent = parkHotel.checkAvailability();

var elPool = document.getElementById("pool");
elPool.textContent = 'pool ' + parkHotel.pool;
*/
var msg = "<h2>browser window</h2>";
msg += "<p>width: " + window.innerWidth + "</p>";
msg += "<p>height: " + window.innerHeight + "</p>";
msg += "<h2>history</h2>";
msg += "<p>items: " + window.history.length + "</p>";
msg += "<h2>screen</h2>";
msg += "<p>width: " + window.screen.width + "</p>";
msg += "<p>height :" + window.screen.height + "</p>";

var elScreenInfo = document.getElementById("screenInfo");
elScreenInfo.innerHTML = msg;