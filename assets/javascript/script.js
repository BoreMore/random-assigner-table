var names = [];
var assignments = [];
var i;
var text = "";
var j;
var k;

function keyDown() {
    if (event.keyCode === 13) {
        addFunction();
    }
}

function addFunction() {
    if (document.getElementById("namesValues").value === "" || document.getElementById("assignmentValues").value === "") {
        alert("Please enter a value!");
    } else {
        newTableRow();
        names.push(document.getElementById("namesValues").value);
        assignments.push(document.getElementById("assignmentValues").value);
        document.getElementById("assignmentValues").value = "";
        document.getElementById("namesValues").value = "";
    }
}

function newTableRow() {
    var newTR =  document.createElement("TR");
    var newTD1 = document.createElement("TD");
    var newTD2 = document.createElement("TD");
    var tableTextNames = document.createTextNode(document.getElementById("namesValues").value);
    var tableTextAssignments = document.createTextNode(document.getElementById("assignmentValues").value);
    newTD1.appendChild(tableTextNames);
    newTD2.appendChild(tableTextAssignments);
    newTR.appendChild(newTD1);
    newTR.appendChild(newTD2);
    document.getElementById("write").appendChild(newTR);
}

function shuffle(a) {
    var l, x, o;
    for (l = a.length - 1; l > 0; l--) {
        x = Math.floor(Math.random() * (l + 1))
        o = a[l];
        a[l] = a[x];
        a[x] = o;
    }
}

function displayNameAssignments() {
    shuffle(names);
    shuffle(assignments);
    document.getElementById("write").innerHTML = "";
    for (i = 0; i < names.length || i < assignments.length; i++) {
        var newTR = document.createElement("TR");
        var newTD1 = document.createElement("TD"); 
        var newTD2 = document.createElement("TD");
        var tableNames = document.createTextNode(names[i]);
        var tableAssignments = document.createTextNode(assignments[i]);
        newTD1.appendChild(tableNames);
        newTD2.appendChild(tableAssignments);
        newTR.appendChild(newTD1);
        newTR.appendChild(newTD2);
        document.getElementById("write").appendChild(newTR);
    }
}