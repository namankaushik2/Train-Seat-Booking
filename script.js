var seats = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0]];
	var available = [7,7,7,7,7,7,7,7,7,7,7,3]
	var total_seats = 80;
	var r;

	function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }


    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
	}





	function reserve(name, no_of_seats){

		if (no_of_seats > total_seats) {
			document.getElementById('full').innerHTML = "Sorry only " + total_seats + " are available";
			return;
		}
		for(var i = 0; i<seats.length; i++){
      if (available[i]>=no_of_seats){
      total_seats -= no_of_seats;
      available[i]-=no_of_seats;

      var j=0;
      while((no_of_seats>0) && (j < seats[i].length)){
      	if(seats[i][j]==0){
        seats[i][j]=name;
        no_of_seats--;
      	}
      	j++;
      }
       break;
      }
		}
		if(no_of_seats > 0){
	  	r = indexOfMax(available);
	  	t = r;
	  	var flag = 0;
	  	var odd = 1;
	  	var even = 1;
	  	while(no_of_seats > 0){
	  		for(var p = 0; p<seats[t].length; p++){
	  			if(seats[t][p] == 0){
	  				seats[t][p] = name;
	  				available[t]--;
	  				no_of_seats--;
	  				total_seats--;

	  			}
	  		}
	  		flag++;
	  		if(flag%2 == 1){
	  			if (r+odd<12) {
	  				t = r+odd;
	  				odd++;
	  			}
	  			else{
	  				t = r-even;
	  				even++;
	  			}
	  		}
	  		if(flag%2 == 0){
	  			if(r-even >= 0){
	  				t = r-even;
	  				even++;
	  			}
	  			else{
	  				t = r+odd;
	  				odd++;
	  			}
	  		}


	  	}

		}



		// return(seats)
	}



for(var i=0;i<7;i++)
{
	for(var j=0;j<7;j++)
	{
		if(seats[i][j]!=0)
		{
			document.getElementById(i+""+j).style.backgroundColor = "red";
		}
	}
}

document.getElementById("seat_available").innerHTML = "Total Seat Left :- " + total_seats;
document.getElementById("seat_booked").innerHTML = "Total Seat booked :- " + (80- total_seats);

function getInput() {
		var x,name, text;

		// Get the value of input field
		x = document.getElementById("numb").value;
		name = document.getElementById("name").value;


		// Check the input value inbetween 1 - 7
		if(isNaN(x) || x < 1 || x > 7) {
				text = "You can book maximum 7 seat at a time";
		}
		else {

				text = "Congratulations! Your Seat is Booked.";
				reserve(name,x);


		}
		document.getElementById("myOutput").innerHTML = text;
		document.getElementById("seat_available").innerHTML = "Total Seat Left :- " + total_seats;
		document.getElementById("seat_booked").innerHTML = "Total Seat booked :- " + (80- total_seats);
		document.getElementById("numb").value = "";
		document.getElementById("name").value = "";


		for(var i=0;i<seats.length;i++)
		{
			for(var j=0;j<seats[i].length;j++)
			{
				if(seats[i][j]!=0)
				{
					document.getElementById(i + "" +j).style.backgroundColor = "red";
				}
			}
		}

		};












console.log(seats)
console.log(total_seats)
