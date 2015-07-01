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
// var msg = "<h2>browser window</h2>";
// msg += "<p>width: " + window.innerWidth + "</p>";
// msg += "<p>height: " + window.innerHeight + "</p>";
// msg += "<h2>history</h2>";
// msg += "<p>items: " + window.history.length + "</p>";
// msg += "<h2>screen</h2>";
// msg += "<p>width: " + window.screen.width + "</p>";
// msg += "<p>height :" + window.screen.height + "</p>";

// var elScreenInfo = document.getElementById("screenInfo");
// elScreenInfo.innerHTML = msg;

// var msg = "<h2>page title: </h2>" + document.title;
// msg += "<h2>page address: </h2>" + document.URL;
// msg += "<h2>last modified: </h2>" + document.lastModified;

// var elMessage = document.getElementById("pageInfo");
// elMessage.innerHTML = msg;

// document.write("Hello");
// document.write(msg);
// document.querySelectorAll();

// document.write(saying);
// document.write(saying.length + " ");
// document.write(saying.toUpperCase() + " ");
// document.write(saying.toLowerCase());
// document.write(saying.toUpperCase() + saying[1].toLowerCase());
// document.write(caps.toUpperCase());
// document.write(saying.indexOf("o"));
// document.write(saying.substring(0,8));

// var sayingArray = saying.split(" ");
// console.log(sayingArray);

// document.write(sayingArray[0].replace("h", "H") + " " + sayingArray[1].replace("s", "S") + " " + sayingArray[2].replace("h", "H"));

// var msg = "<h2>length: </h2>";
// msg += saying.length;
// msg += "<h2>uppercase: </h2>";
// msg += saying.toUpperCase();

// elMessage = document.getElementById("pageInfo");
// elMessage.innerHTML = msg;

// var javascriptDataTypes = ["String", "Number", "Boolean", "Undefined", "Null"];
// document.write(javascriptDataTypes);

var saying = "home sweet home ";

var numbers = 1.5555999

console.log(isNaN(numbers));

// document.write(numbers.toFixed(2));
// document.write(numbers.toPrecision(2));
// document.write(numbers.toExponential(10));

// document.write(Math.PI.toFixed(4));
// document.write(Math.round(numbers));
// document.write(Math.random() + 6);

var randomNumber = (Math.random() * 20) + 1;
document.write(randomNumber.toPrecision(1));

