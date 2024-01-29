class BananaadeStand {
	//Member fields and methods
	/**
	bananas = 0;
	gallonsOfWater = 0;
	cupsOfSugar = 0;
	emptyGlasses = 0;
	glassesOfBananaade = 0;
	price = 0.0;
	income = 0.0;
	**/
	
	constructor(bananas, gallonsOfWater, cupsOfSugar, emptyGlasses, price) {
		this.bananas = bananas;
		this.gallonsOfWater = gallonsOfWater;
		this.cupsOfSugar = cupsOfSugar;
		this.emptyGlasses = emptyGlasses;
		this.price = price;
		this.glassesOfBananaade = 0;
		this.income = 0.0;
	}
	
	showAdmin(article1) {
		article1.innerHTML = "<h1>Admin</h1><ul><li>Price per Glass: $" + this.price.toFixed(2)
							+ "</li><li>Glasses of Bananaade: " + this.glassesOfBananaade
							+ "</li><li>Income: $" + this.income.toFixed(2) + "</li></ul>";
	}
	
	showIngredients(article2) {
		article2.innerHTML = "<p>Ingredients</p><table>"
							+ "<tr><td>Bananas</td><td>" + this.bananas + "</td></tr>"
							+ "<tr><td>Water</td><td>" + this.gallonsOfWater + "</td></tr>"
							+ "<tr><td>Sugar</td><td>" + this.cupsOfSugar + "</td></tr>"
							+ "<tr><td>Empty Glasses</td><td>" + this.emptyGlasses + "</td></tr>"
							+ "</table>";
	}
	
	makeBananaade() {
		if (this.bananas >= 6 && this.gallonsOfWater >= 1 && this.cupsOfSugar >= 1 && this.emptyGlasses >= 8) {
			this.bananas -= 6;
			this.gallonsOfWater -= 1;
			this.cupsOfSugar -= 1;
			this.emptyGlasses -= 8;
			this.glassesOfBananaade += 8;
			return 8;
		}
		return 0;
	}
	
	sellBananaade() {
		if (this.glassesOfBananaade >= 1 || this.makeBananaade() != 0) {
			this.glassesOfBananaade -= 1;
			this.income += this.price;
			return 1;
		}
		return 0;
	}
	
	sellMoreBananaade(requestedGlasses) {
		if (this.glassesOfBananaade >= requestedGlasses || this.makeBananaade() >= requestedGlasses) {
			this.income += (this.price * requestedGlasses);
			this.glassesOfBananaade -= requestedGlasses;
			return requestedGlasses;
		}
		else if (this.glassesOfBananaade > 0) {
			let sold = this.glassesOfBananaade;
			this.income += (this.price * this.glassesOfBananaade);
			this.glassesOfBananaade -= this.glassesOfBananaade;
			return sold;
		}
		return 0;
	}
}

/**
function test1() {
	//The following code will execute when the JS file loads.
	let ls = new BananaadeStand(15,3,4,20,1.5);
	ls.makeBananaade();
	ls.makeBananaade();
	ls.sellBananaade();
	ls.sellMoreBananaade(8);
	//ls.sellMoreBananaade(8);
	
	//Nothing happens here
	//ls.sellMoreBananaade();
	//ls.sellBananaade();
	
	//Call showAdmin and showIngredients to add the HTML to the page.
	ls.showAdmin(document.getElementById('admin'));
	ls.showIngredients(document.getElementById('ingredients'));
}

test1(); //Run the test
**/
function test() {

  let ls = new BananaadeStand(100,100,100,100, 1.5); 

  ls.sellBananaade();

  ls.sellBananaade();

  ls.sellBananaade();

  ls.sellBananaade();

  ls.showIngredients(document.getElementById('ingredients'));

  ls.showAdmin(document.getElementById('admin')); 

}

test();