   // check the empty input
   function checkEmptyInput()
   {
       var isEmpty = false,
           fname = document.getElementById("fname").value,
           lname = document.getElementById("lname").value,
           email = document.getElementById("email").value;
           Phone = document.getElementById("Phone").value;
   
       if(fname === ""){
           alert("First Name Connot Be Empty");
           isEmpty = true;
       }
        if(lname === ""){
           alert("Last Name Connot Be Empty");
           isEmpty = true;
       }
        if( !email.match(/^[A-Za-z\._\[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        alert("Email is invalid");
        
        isEmpty = true;
        
    }
    if(Phone === ""){
        alert("phone Connot Be Empty");
        isEmpty = true;
    }
       

       return isEmpty;
   }
   
   // add Row
   function addHtmlTableRow()
   {
       
       if(!checkEmptyInput()){
       var newRow = table.insertRow(table.length),
           cell1 = newRow.insertCell(0),
           cell2 = newRow.insertCell(1),
           cell3 = newRow.insertCell(2),
           cell4 = newRow.insertCell(3),
           fname = document.getElementById("fname").value,
           lname = document.getElementById("lname").value,
           email = document.getElementById("email").value;
           Phone = document.getElementById("Phone").value;
   
       cell1.innerHTML = fname;
       cell2.innerHTML = lname;
       cell3.innerHTML = email;
       cell4.innerHTML = Phone;
       
       selectedRowToInput();
   }
   }
   

function filterTable(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#table ").rows;
    
    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        var thirtCol = rows[i].cells[2].textContent.toUpperCase();
        var fourCol = rows[i].cells[3].textContent.toUpperCase();
        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirtCol.indexOf(filter) > -1 || fourCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }      
    }
}

document.querySelector('#myInput').addEventListener('keyup', filterTable, false);