class BananaadeStand {
	//Member fields and methods
	
	constructor(bananas, gallonsOfWater, cupsOfSugar, emptyGlasses, price) {
		this.bananas = bananas;
		this.gallonsOfWater = gallonsOfWater;
		this.cupsOfSugar = cupsOfSugar;
		this.emptyGlasses = emptyGlasses;
		this.price = price;
		this.glassesOfBananaade = 0;
		this.income = 0.0;
	}

	showAdmin() {
		//Create a new article with createElement().
		let article = document.createElement('article');
		//Create a new h1 header with createElement().
		let h1 = document.createElement('h1');
		//Create a text node for the h1 using createTextNode().
		let h1text = document.createTextNode('Admin');
		//Append the text node to the h1 using appendChild().
		h1.appendChild(h1text);
		//Append the h1 header to the article with appendChild().
		article.appendChild(h1);
		
		let ul = document.createElement('ul');

		//Price
		let li = document.createElement('li');
		let ltext = document.createTextNode("Price per Glass: $" + this.price.toFixed(2));
		li.appendChild(ltext);
		ul.appendChild(li);
		
		//Glasses of Bananaade
		li = document.createElement('li');
		ltext = document.createTextNode("Glasses of Bananaade: " + this.glassesOfBananaade);
		li.appendChild(ltext);
		ul.appendChild(li);
		
		//Income
		li = document.createElement('li');
		ltext = document.createTextNode("Income: $" + this.income.toFixed(2));
		li.appendChild(ltext);
		ul.appendChild(li);
		
		article.appendChild(ul);
		
		//Append the article to the body. (Trickier)
		document.body.appendChild(article);
	}
	
	//Add showIngredients the same way
	showIngredients() {
		let article = document.createElement('article');
		let p = document.createElement('p');
		let ptext = document.createTextNode("Ingredients");
		
		p.appendChild(ptext);
		article.appendChild(p);
		
		let table = document.createElement('table');
		
		//Bananas
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td1text = document.createTextNode("Bananas");
		let td2text = document.createTextNode(this.bananas);
		td1.appendChild(td1text);
		td2.appendChild(td2text);
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
		
		//Water
		tr = document.createElement('tr');
		td1 = document.createElement('td');
		td2 = document.createElement('td');
		td1text = document.createTextNode("Water");
		td2text = document.createTextNode(this.gallonsOfWater);
		td1.appendChild(td1text);
		td2.appendChild(td2text);
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
		
		//Sugar
		tr = document.createElement('tr');
		td1 = document.createElement('td');
		td2 = document.createElement('td');
		td1text = document.createTextNode("Sugar");
		td2text = document.createTextNode(this.cupsOfSugar);
		td1.appendChild(td1text);
		td2.appendChild(td2text);
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
		
		//Empty Glasses
		tr = document.createElement('tr');
		td1 = document.createElement('td');
		td2 = document.createElement('td');
		td1text = document.createTextNode("Empty Glasses");
		td2text = document.createTextNode(this.emptyGlasses);
		td1.appendChild(td1text);
		td2.appendChild(td2text);
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);
		
		article.appendChild(table);
		
		document.body.appendChild(article);
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

function test1() {
	//The following code will execute when the JS file loads.
	let ls = new BananaadeStand(15,3,4,20,1.5);
	ls.makeBananaade();
	ls.sellBananaade();
	ls.sellMoreBananaade(8);
	//call showAdmin and showIngredients. Note that you do not need arguments now.
	ls.showAdmin();
	ls.showIngredients();
}

test1(); //Run the test