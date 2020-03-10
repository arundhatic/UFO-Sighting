// from data.js
var tableData = data;

//variable declaration
var tbody = d3.select("tbody");
var filter = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");

function buildTable(ufoData){
  //cleaning up 
   tbody.html("");
   //loop through data
   ufoData.forEach((rowData) => {
    var row = tbody.append("tr");
    Object.values(rowData).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

const multiFilter = (arr, filters) => {
    const filterKeys = Object.keys(filters);
    return arr.filter(eachObj => {
      return filterKeys.every(eachKey => {
        if (!filters[eachKey].length) {
          return true; // passing an empty filter means that filter is ignored.
        }
        return filters[eachKey].includes(eachObj[eachKey]);
      });
    });
  };

function filterSearch(){
	
	d3.event.preventDefault();
	
	var searchDate = d3.select("#datetime").property("value");
	var searchCity = d3.select("#city").property("value");
	var searchState = d3.select("#state").property("value");
	var searchCountry = d3.select("#country").property("value");
    var searchShape = d3.select("#shape").property("value");

    const filters = {
        datetime: searchDate,
        city: searchCity,
        state: searchState,
        country: searchCountry,
        shape: searchShape
      };
    
    console.log(multiFilter(data,filters))
	    
    buildTable(multiFilter(data,filters));
}


function resetSearch() {
	buildTable(tableData);
}

// Build Table with data.js 
buildTable(tableData);
filter.on("click", filterSearch);
reset.on("click", resetSearch);





  
