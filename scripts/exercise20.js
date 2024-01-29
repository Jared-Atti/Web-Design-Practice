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
		this.minBananas = 6;
		this.minWater = 1;
		this.minSugar = 1;
		this.minEmptyGlasses = 8;
	}

	showAdmin() {
		//Create a new article with createElement().
		let article = document.createElement('article');
		//Create a new h1 header with createElement().
		let h2 = document.createElement('h2');
		//Create a text node for the h1 using createTextNode().
		let h2text = document.createTextNode('Admin');
		//Append the text node to the h1 using appendChild().
		h2.appendChild(h2text);
		//Append the h1 header to the article with appendChild().
		article.appendChild(h2);
		
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
		let h = document.createElement('h2');
		let htext = document.createTextNode("Inventory");
		
		h.appendChild(htext);
		article.appendChild(h);
		
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
		
		// Sugar
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
		
		// Empty Glasses
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
		if (this.bananas >= this.minBananas && this.gallonsOfWater >= this.minWater && this.cupsOfSugar >= this.minSugar && this.emptyGlasses >= this.minEmptyGlasses) {
			this.bananas -= 6;
			this.gallonsOfWater -= 1;
			this.cupsOfSugar -= 1;
			this.emptyGlasses -= 8;
			this.glassesOfBananaade += 8;
			
			this.updateAllInventory();
			this.updateAdmin();
			return 8;
		}
		return 0;
	}
	
	sellBananaade() {
		if (this.glassesOfBananaade >= 1) { // || this.makeBananaade() != 0) {
			this.glassesOfBananaade -= 1;
			this.income += this.price;
			this.updateAdmin();
			return 1;
		}
		return 0;
	}
	
	sellMoreBananaade(requestedGlasses) {
		if (this.glassesOfBananaade >= requestedGlasses) { // || this.makeBananaade() >= requestedGlasses) {
			this.income += (this.price * requestedGlasses);
			this.glassesOfBananaade -= requestedGlasses;
			this.updateAdmin();
			return requestedGlasses;
		}
		else if (this.glassesOfBananaade > 0) {
			let sold = this.glassesOfBananaade;
			this.income += (this.price * this.glassesOfBananaade);
			this.glassesOfBananaade -= this.glassesOfBananaade;
			this.updateAdmin();
			return sold;
		}
		return 0;
	}
	
	updateInventory(label, number, limit) {
		let table = document.querySelector("table");
		let tds = table.querySelectorAll("td");
		for (let td of tds) {
			if (td.textContent.includes(label)) {
				td.nextSibling.textContent = +number;
				if (number < limit) {
					td.nextSibling.style.backgroundColor = "pink";
					td.style.backgroundColor = "pink";
				} else {
					td.nextSibling.style.backgroundColor = "white";
					td.style.backgroundColor = "white";
				}
			}
		}
	}
	
	updateAllInventory() {
		this.updateInventory("Bananas", +this.bananas, +this.minBananas);
		this.updateInventory("Water", +this.gallonsOfWater, +this.minWater);
		this.updateInventory("Sugar", +this.cupsOfSugar, +this.minSugar);
		this.updateInventory("Empty Glasses", +this.emptyGlasses, +this.minEmptyGlasses);
	}
	
	updateAdmin() {
		let ul = document.querySelector("ul");
		let lis = ul.querySelectorAll("li");
		lis[0].textContent = `Price per glass: $${this.price.toFixed(2)}`;
		lis[1].textContent = `Glasses of Bananaade: ${this.glassesOfBananaade}`;
		lis[2].textContent = `Income: $${this.income.toFixed(2)}`;
	}
}

let ls = new BananaadeStand(20,10,10,10, 2.0);

function init() {
	ls.showAdmin();  
	ls.showIngredients();  
	hideAll();
	initAddIngredients();
	initButtons();
	initImageMouseOver();
}
init();

function hideAll() {
	let elements = document.getElementsByClassName("hide_me");
	for (let ele of elements) {
		ele.style.display='none';
	}
}

function initButtons() {
	let buttons = document.querySelectorAll("button");
	buttons[0].addEventListener("click", () => {ls.makeBananaade();});
	buttons[1].addEventListener("click", () => {ls.sellBananaade();});
	buttons[2].addEventListener("click", () => {ls.sellMoreBananaade(8);});
}

function initAddIngredients() {
	let elements = document.querySelectorAll(".hide_me");
	for (let ele of elements) {
		ele.addEventListener("click", showInput, false);
		ele.addEventListener("keyup", addIngredient, false);
	}
}

function initImageMouseOver() {
	let nodes = document.querySelectorAll('span');
	for (let ele of nodes) {
		ele.addEventListener('mouseover', (e) => {
			e.target.style.color="purple";
			e.target.previousSibling.previousSibling.src="../images/plus_dark.png";
			//set image to plus_dark.png' using nextSibling
			//set the text to purple 
		}, false);
		ele.addEventListener('mouseout', function (e) {
			e.target.style.color="blue";
			e.target.previousSibling.previousSibling.src="../images/plus_light.png";
			//set image to plus_dark.png' using nextSibling
			//set the text to purple     
		}, false);
	}
	
	let imgs = document.querySelectorAll('img');
	for (let ele of imgs) {
		ele.addEventListener('mouseover', (e) => {
			e.target.src="../images/plus_dark.png";
		}, false);
		ele.addEventListener('mouseout', function (e) {
			e.target.src="../images/plus_light.png";
		}, false);
	}

}

function showInput() {
	hideAll();
	this.style.display='inline';
	this.value="";
	this.focus();
}

function addIngredient(e) {
	if (e.key == "Enter")
	{
		//We are done so process the value.
		if (e.target.id == "numBananas") {
			ls.bananas += +e.target.value;
			ls.updateInventory("Bananas", +ls.bananas, +ls.minBananas);
		}
		else if (e.target.id == "numWater") {
			ls.gallonsOfWater += +e.target.value;
			ls.updateInventory("Water", +ls.gallonsOfWater, +ls.minWater);
		}
		else if (e.target.id == "numSugar") {
			ls.cupsOfSugar += +e.target.value;
			ls.updateInventory("Sugar", +ls.cupsOfSugar, +ls.minSugar);
		}
		else if (e.target.id == "numEmptyGlasses") {
			ls.emptyGlasses += +e.target.value;
			ls.updateInventory("Empty Glasses", +ls.emptyGlasses, +ls.minEmptyGlasses);
		}
	}
} 
