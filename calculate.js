//size of box
//change radio into buttons


<form action="" id="cakeform">
	<input type="button"  name="selectedcake" value="Round6" />
	Round cake 6" -  serves 8 people ($20)
	<input type="button"  name="selectedcake" value="Round8" />
		Round cake 8" - serves 12 people ($25)
	<input type="button"  name="selectedcake" value="Round10" />
		Round cake 10" - serves 16 people($35)
	<input type="button"  name="selectedcake" value="Round12" />
		Round cake 12" - serves 30 people($75)
</form>




//In the javascript code
var theForm = document.forms["cakeform"];


var cake_prices = new Array();
cake_prices["Round6"]=20;
cake_prices["Round8"]=25;
cake_prices["Round10"]=35;
cake_prices["Round12"]=75;

// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getCakeSizePrice()
{
	var cakeSizePrice=0;
	//Get a reference to the form id="cakeform"
	var theForm = document.forms["cakeform"];
	//Get a reference to the cake the user Chooses name=selectedCake":
	var selectedCake = theForm.elements["selectedcake"];
	//Here since there are 4 radio buttons selectedCake.length = 4
	//We loop through each radio buttons
	for(var i = 0; i < selectedCake.length; i++)
	{
		if(selectedCake[i].checked) 
		{
			//we set cakeSizePrice to the value of the selected radio button
			//i.e. if the user choose the 8" cake we set it to 25
			//by using the cake_prices array
			//We get the selected Items value
			//For example cake_prices["Round8".value]"
			cakeSizePrice = cake_prices[selectedCake[i].value];
			//If we get a match then we break out of this loop
			//No reason to continue if we get a match
			break;
		}
	}
	//We return the cakeSizePrice
	return cakeSizePrice;
}

function getTotal()
{
	//Here we get the total price by calling our function
	//Each function returns a number so by calling them we add the values they return together
	var cakePrice = getCakeSizePrice() + getFillingPrice() +
	candlesPrice() + insciptionPrice();
	//display the result
	document.getElementById('totalPrice').innerHTML =
	"Total Price For Cake $"+cakePrice;
}
