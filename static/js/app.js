// from data.js

var tableData = data;

// Filter button for date search
document.getElementById("filter-btn").addEventListener("click", UFOsearch);

// UFO search function based on datetime
function UFOsearch() {

    // clear out old search data
    var rownum = document.getElementById('ufo-table').rows.length;
    for (var i = rownum - 1; i > 0; i--) {
        document.getElementById('ufo-table').deleteRow(i);
    }

    // makes sure data doesn't refresh to the default date
    event.preventDefault();
    var i;
    var ufodatetime = document.getElementById("datetime").value.toLowerCase();

    // loop through all data with search date
    for (i = 0; i < data.length; i++) {
        if ((data[i].datetime == ufodatetime || ufodatetime == '')) {
            var tableRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];
            var newRow = tableRef.insertRow(tableRef.rows.length);
           
            var tbl_cell1 = newRow.insertCell(0);
            var tbl_cell2 = newRow.insertCell(1);
            var tbl_cell3 = newRow.insertCell(2);
            var tbl_cell4 = newRow.insertCell(3);
            var tbl_cell5 = newRow.insertCell(4);
            var tbl_cell6 = newRow.insertCell(5);
            var tbl_cell7 = newRow.insertCell(6);

            var txt_cell1 = document.createTextNode(data[i].datetime);
            var txt_cell2 = document.createTextNode(data[i].city);
            var txt_cell3 = document.createTextNode(data[i].state);
            var txt_cell4 = document.createTextNode(data[i].country);
            var txt_cell5 = document.createTextNode(data[i].shape);
            var txt_cell6 = document.createTextNode(data[i].durationMinutes);
            var txt_cell7 = document.createTextNode(data[i].comments);

            tbl_cell1.appendChild(txt_cell1);
            tbl_cell2.appendChild(txt_cell2);
            tbl_cell3.appendChild(txt_cell3);
            tbl_cell4.appendChild(txt_cell4);
            tbl_cell5.appendChild(txt_cell5);
            tbl_cell6.appendChild(txt_cell6);
            tbl_cell7.appendChild(txt_cell7);

        }
    }

}
