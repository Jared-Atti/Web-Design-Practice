$(function start() {
  getStudyAbroad();
  getLanguage();
  getProjects();
  
});

function getLanguage(lang, prof){
  $.ajax({
    url: 'https://student2.cs.appstate.edu/swansonja/project/data_language.php',
    dataType: 'jsonp',
    success: function(data) {
      const table = getTable("Mentors by Language", data);
      $("#language").html(table);
    }
  });  
}

function getProjects(){
  $.ajax({
    url: 'https://student2.cs.appstate.edu/swansonja/project/data_projects.php',
    dataType: 'jsonp',
    success: function(data) {        
      let table = getTable("Projects Available", data);
      $("#project").html(table);
    }
  });  
}

function getStudyAbroad(){
  $.ajax({
    url: 'https://student2.cs.appstate.edu/swansonja/project/data_study_abroad.php',
    dataType: 'jsonp',
    success: function(data) {
      const table = getTable("Study Abroad", data);
      $("#study_abroad").html(table);
    }
  });  
}

function getTable(caption_text, data) {
  let table = document.createElement('table');
  let caption = document.createElement('caption');
  caption.textContent = caption_text;
  table.appendChild(caption);
  for (let obj of data) {
    addRow(table, obj);
  }
  return table;
}


function addRow(table, obj) {
  let row = document.createElement('tr');
  for (let field in obj) {
    let cell = document.createElement('td');
    cell.textContent = obj[field];
    row.appendChild(cell);
  }
  table.appendChild(row);
}






