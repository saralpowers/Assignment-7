// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var $ = function (id) {
    return document.getElementById(id);
};

let form = $("addForm");
let empTable = $("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();
    //console.log("button was clicked")

    // GET THE VALUES FROM THE TEXT BOXES
    let idNum = $("id").value;
    let fullName = $("name").value;
    let extension = $("extension").value;
    let email = $("email").value;
    let department = $("department").value;
    empCount++;
    //console.log(idNum);

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let empTable = $("employees");
    let newRow = empTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let newEmp = newRow.insertCell(0);
    let newText = document.createTextNode(idNum);
    newEmp.appendChild(newText);
    newEmp = newRow.insertCell(1);
    newText = document.createTextNode(fullName);
    newEmp.appendChild(newText);
    newEmp = newRow.insertCell(2);
    newText = document.createTextNode(extension);
    newEmp.appendChild(newText);
    newEmp = newRow.insertCell(3);
    newText = document.createTextNode(email);
    newEmp.appendChild(newText);
    newEmp = newRow.insertCell(4);
    newText = document.createTextNode(department);
    newEmp.appendChild(newText);


    // CREATE THE DELETE BUTTON
    newEmp = newRow.insertCell(5);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    newEmp.appendChild(deleteBtn);

    // RESET THE FORM
    $("id").value = '';
    $("name").value = '';
    $("extension").value = '';
    $("email").value = '';
    $("department").value = 'Administrative';

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
     $("empCount").innerHTML = `${"(" + empCount + ")"}`;

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (confirm('Are you sure you want to delete this employee record?')) {
        empTable.remove(e.target);
        empCount--;
        $("empCount").innerHTML = `${"(" + empCount + ")"}`;
    }

});