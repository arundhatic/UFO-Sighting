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

function filterSearch(){
	
	d3.event.preventDefault();
	
	var searchDate = d3.select("#datetime").property("value");
	var searchCity = d3.select("#city").property("value");
	var searchState = d3.select("#state").property("value");
	var searchCountry = d3.select("#country").property("value");
    var searchShape = d3.select("#shape").property("value");

    var filteredDatas = data;

	if (searchDate){
        console.log(searchDate)
        filteredDatas = tableData.filter(filterdata => String(filterdata.datetime) === String(searchDate));
        console.log(filteredDatas)
    }
    if (searchCity){
        console.log(searchCity)
        filteredDatas = tableData.filter(filterdata => filterdata.city.toLowerCase() === searchCity.toLowerCase());
        console.log(filteredDatas)
    }
    if (searchState){
        console.log(searchState)
        filteredDatas = tableData.filter(filterdata => filterdata.state.toLowerCase() === searchState.toLowerCase());
        console.log(filteredDatas)
        }
    if (searchCountry){
        console.log(searchCountry)
        filteredDatas = tableData.filter(filterdata => filterdata.country.toLowerCase() === searchCountry.toLowerCase());
        console.log(filteredDatas)
        }
    if (searchShape){
        console.log(searchShape)
        filteredDatas = tableData.filter(filterdata => filterdata.shape.toLowerCase() === searchShape.toLowerCase());
        console.log(filteredDatas)
        }

    
    buildTable(filteredDatas);
}


function resetSearch() {
	tbody.html('');
	buildTable(tableData);
}

// Build Table with data.js 
buildTable(tableData);
filter.on("click", filterSearch);
reset.on("click", resetSearch);





  
