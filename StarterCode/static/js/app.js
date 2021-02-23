var tableData = data;
function altTable() {
  var tbody = document.getElementById('tbody');
  var datetime = document.getElementById('datetime').value;
  var shape = document.getElementById('shape').value;
  var state = document.getElementById('state').value;

  // Clear Table before updating.
  var Parent = document.getElementById('tbody');
  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild);
  }


  for (let i = 0; i < data.length; i++) {
    var tr = "<tr>";
    // All fields entered
    if (shape==data[i].shape && state==data[i].state && datetime==data[i].datetime) {
          tr += "<td>" + data[i].datetime + "</td>" + "<td>" + data[i].city + "</td>" + "<td>" + data[i].state + "</td>" + "<td>" + data[i].country + "</td>" + "<td>" + data[i].shape + "</td>" + "<td>" + data[i].duration + "</td>" + "<td>" + data[i].comments + "</td>" + "</tr>"
          tbody.innerHTML += tr;
    }// Date and Shape entered
    else if (shape==data[i].shape && datetime==data[i].datetime) {
          tr += "<td>" + data[i].datetime + "</td>" + "<td>" + data[i].city + "</td>" + "<td>" + data[i].state + "</td>" + "<td>" + data[i].country + "</td>" + "<td>" + data[i].shape + "</td>" + "<td>" + data[i].duration + "</td>" + "<td>" + data[i].comments + "</td>" + "</tr>"
          tbody.innerHTML += tr;
    }// Date and State entered
    else if(datetime == data[i].datetime && state==data[i].state) {
          tr += "<td>" + data[i].datetime + "</td>" + "<td>" + data[i].city + "</td>" + "<td>" + data[i].state + "</td>" + "<td>" + data[i].country + "</td>" + "<td>" + data[i].shape + "</td>" + "<td>" + data[i].duration + "</td>" + "<td>" + data[i].comments + "</td>" + "</tr>"
          tbody.innerHTML += tr;
    }// Shape and State entered
    else if (shape==data[i].shape && state==data[i].state) {
          tr += "<td>" + data[i].datetime + "</td>" + "<td>" + data[i].city + "</td>" + "<td>" + data[i].state + "</td>" + "<td>" + data[i].country + "</td>" + "<td>" + data[i].shape + "</td>" + "<td>" + data[i].duration + "</td>" + "<td>" + data[i].comments + "</td>" + "</tr>"
          tbody.innerHTML += tr;
    }// Date only
    else if (datetime==data[i].datetime) {
          tr += "<td>" + data[i].datetime + "</td>" + "<td>" + data[i].city + "</td>" + "<td>" + data[i].state + "</td>" + "<td>" + data[i].country + "</td>" + "<td>" + data[i].shape + "</td>" + "<td>" + data[i].duration + "</td>" + "<td>" + data[i].comments + "</td>" + "</tr>"
          tbody.innerHTML += tr;
    } // Shape only
    else if (shape==data[i].shape) {
          tr += "<td>" + data[i].datetime + "</td>" + "<td>" + data[i].city + "</td>" + "<td>" + data[i].state + "</td>" + "<td>" + data[i].country + "</td>" + "<td>" + data[i].shape + "</td>" + "<td>" + data[i].duration + "</td>" + "<td>" + data[i].comments + "</td>" + "</tr>"
          tbody.innerHTML += tr;
    } // State only
    else if (state==data[i].state) {
          tr += "<td>" + data[i].datetime + "</td>" + "<td>" + data[i].city + "</td>" + "<td>" + data[i].state + "</td>" + "<td>" + data[i].country + "</td>" + "<td>" + data[i].shape + "</td>" + "<td>" + data[i].duration + "</td>" + "<td>" + data[i].comments + "</td>" + "</tr>"
          tbody.innerHTML += tr;
    }

  }
}
