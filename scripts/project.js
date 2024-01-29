const languageURL = 'https://student2.cs.appstate.edu/swansonja/project/data_language.php';
const projectURL = 'https://student2.cs.appstate.edu/swansonja/project/data_projects.php';
const studyAbroadURL = 'https://student2.cs.appstate.edu/swansonja/project/data_study_abroad.php';

$(function start() {
	// setTable(languageURL,"Search by Language","language");
	// setTable(projectURL, "Search by Project","project");
	// setTable(studyAbroadURL, "Study Abroad Opportunities","study_abroad");
});

//***********************************************
//FUNCTION setTable
//Create a table from a given jasonp URL
//data source.
//parameters:
// url - The URL of the jasonp file
// caption - The caption for the table.
// divId - The id of the div to put the table.
//***********************************************
function setTable(url, caption, divId) {
	let oldtable = document.querySelector('table');
	let options = document.querySelectorAll('option');
	if (oldtable != null && oldtable.firstChild.innerHTML != caption) {
		oldtable.remove();
		for (o of options) {
			o.remove();
		}
	}
	$.ajax({
		url: url,
		dataType: 'jsonp',
		success: function(data) {
			addTable(caption, divId, data, url);
		}
	});
}

function addTable(caption_text, divId, data, url) {
	let table = document.createElement('table');
	let caption = document.createElement('caption');
	caption.textContent = caption_text;
	table.appendChild(caption);
	if (caption_text == "Search by Language") {
		let header = document.createElement('tr');
		let fname = document.createElement('th');
		let lname = document.createElement('th');
		let lang = document.createElement('th');
		let prof = document.createElement('th');
		let email = document.createElement('th');
		let web = document.createElement('th');
		fname.textContent = "First Name";
		lname.textContent = "Last Name";
		lang.textContent = "Language";
		prof.textContent = "Level of Proficiency";
		email.textContent = "Email";
		web.textContent = "Web Page";
		
		header.appendChild(fname);
		header.appendChild(lname);
		header.appendChild(lang);
		header.appendChild(prof);
		header.appendChild(email);
		header.appendChild(web);
		
		table.appendChild(header);
		
		let filter = document.getElementById('filter');
		if (filter.firstElementChild == null) {
			let op0 = document.createElement('option');
			op0.textContent = "None";
			op0.id = "op1";
			let op1 = document.createElement('option');
			op1.textContent = "Language";
			op0.id = "op2";
			let op2 = document.createElement('option');
			op2.textContent = "Proficiency";
			op0.id = "op2";
			
			filter.appendChild(op0);
			filter.appendChild(op1);
			filter.appendChild(op2);
		}
		
		if (filter.value == "Language") {
			alert("Sorting by Language");
		} else if (filter.value == "Proficiency") {
			alert("Sorting by Proficiency");
		}
		
	} else if (caption_text == "Search by Project") {
		let header = document.createElement('tr');
		let fname = document.createElement('th');
		let lname = document.createElement('th');
		let dept = document.createElement('th');
		let coll = document.createElement('th');
		let count = document.createElement('th');
		let trav = document.createElement('th');
		let colab = document.createElement('th');
		let loc = document.createElement('th');
		fname.textContent = "First Name";
		lname.textContent = "Last Name";
		dept.textContent = "Department";
		coll.textContent = "College";
		count.textContent = "Country";
		trav.textContent = "Trav.";
		colab.textContent = "Collaboration";
		loc.textContent = "Location";
		
		header.appendChild(fname);
		header.appendChild(lname);
		header.appendChild(dept);
		header.appendChild(coll);
		header.appendChild(count);
		header.appendChild(trav);
		header.appendChild(colab);
		header.appendChild(loc);
		
		table.appendChild(header);
		
		let filter = document.getElementById('filter');
		if (filter.firstElementChild == null) {
			let op0 = document.createElement('option');
			op0.textContent = "None";
			op0.id = "op1";
			let op1 = document.createElement('option');
			op1.textContent = "Last Name";
			op1.id = "op2";
			let op2 = document.createElement('option');
			op2.textContent = "Academic College";
			op2.id = "op2";
			let op3 = document.createElement('option');
			op3.textContent = "Academic Department";
			op3.id = "op3";
			let op4 = document.createElement('option');
			op4.textContent = "Country";
			op4.id = "op4";
			
			filter.appendChild(op0);
			filter.appendChild(op1);
			filter.appendChild(op2);
			filter.appendChild(op3);
			filter.appendChild(op4);
		}
		
		if (filter.value == "Last Name") {
			alert("Sorting by Last Name");
		} else if (filter.value == "Academic College") {
			alert("Sorting by Academic College");
		} else if (filter.value == "Academic Department") {
			alert("Sorting by Academic Departmen");
		} else if (filter.value == "Country") {
			alert("Sorting by Country");
		}
		
	} else if (caption_text == "Study Abroad Opportunities") {
		let header = document.createElement('tr');
		let term = document.createElement('th');
		let prog = document.createElement('th');
		let ctry = document.createElement('th');
		let cllg = document.createElement('th');
		let dept = document.createElement('th');
		let date = document.createElement('th');
		let level = document.createElement('th');
		let cred = document.createElement('th');
		term.textContent = "Term";
		prog.textContent = "Program name";
		ctry.textContent = "Country";
		cllg.textContent = "College";
		dept.textContent = "Dept.";
		date.textContent = "Dates";
		level.textContent = "Level";
		cred.textContent = "Credits Avail.";
		
		header.appendChild(term);
		header.appendChild(prog);
		header.appendChild(ctry);
		header.appendChild(cllg);
		header.appendChild(dept);
		header.appendChild(date);
		header.appendChild(level);
		header.appendChild(cred);
		
		table.appendChild(header);
		
		let filter = document.getElementById('filter');
		if (filter.firstElementChild == null) {
			let op0 = document.createElement('option');
			op0.textContent = "None";
			op0.id = "op1";
			let op1 = document.createElement('option');
			op1.textContent = "Term";
			op1.id = "op2";
			let op2 = document.createElement('option');
			op2.textContent = "Program Name";
			op2.id = "op2";
			let op3 = document.createElement('option');
			op3.textContent = "Country";
			op3.id = "op3";
			let op4 = document.createElement('option');
			op4.textContent = "Dates";
			op4.id = "op4";
			
			filter.appendChild(op0);
			filter.appendChild(op1);
			filter.appendChild(op2);
			filter.appendChild(op3);
			filter.appendChild(op4);
		}
		
		if (filter.value == "Term") {
			alert("Sorting by Term");
		} else if (filter.value == "Program Name") {
			alert("Sorting by Program Name");
		} else if (filter.value == "Country") {
			alert("Sorting by Country");
		} else if (filter.value == "Dates") {
			alert("Sorting by Dates");
		}
		
	}
	for (let obj of data) {
		addRow(table, obj, caption);
	}
	$(`#${divId}`).html(table);
}

function addRow(table, obj, caption) {
	let row = document.createElement('tr');
	for (let field in obj) {
		let cell = document.createElement('td');
		cell.textContent = obj[field];
		row.appendChild(cell);
	}
	table.appendChild(row);
}

function init() {
	
	let buttons = document.querySelectorAll("button");
	buttons[0].addEventListener("click", () => {setTable(languageURL,"Search by Language","language");});
	buttons[1].addEventListener("click", () => {setTable(projectURL, "Search by Project","project");});
	buttons[2].addEventListener("click", () => {setTable(studyAbroadURL, "Study Abroad Opportunities","study_abroad");});
}
init();