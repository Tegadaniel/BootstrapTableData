function showResults(){

var personTitle = document.getElementById("title").value;
var personFname = document.getElementById("firstName").value;
var personLname = document.getElementById("lastName").value;
var personAddress = document.getElementById("address").value;
var personEmail = document.getElementById("email").value;
var personNumber = document.getElementById("phoneNumber").value;
var personGender = document.getElementById("gender").value;
console.log(personFname, personLname,personAddress,personNumber,
    personEmail, personGender, personTitle)

var tableRow = document.createElement("tr")
//Title
var titleCreate = document.createElement("td")
var titleNode = document.createTextNode(personTitle);
titleCreate.appendChild(titleNode)
tableRow.appendChild(titleCreate)



//FName
var fnameCreate = document.createElement("td")
var fnameCreateNode = document.createTextNode(personFname);
fnameCreate.appendChild(fnameCreateNode)
tableRow.appendChild(fnameCreate)


// //LName
var lnameCreate = document.createElement("td")
var lnameCreateNode = document.createTextNode(personLname);
lnameCreate.appendChild(lnameCreateNode)
tableRow.appendChild(lnameCreate)

// //Address
var addressCreate = document.createElement("td")
var addressCreateNode = document.createTextNode(personAddress);
addressCreate.appendChild(addressCreateNode)
tableRow.appendChild(addressCreate)

//Email
var emailCreate = document.createElement("td")
var emailCreateNode = document.createTextNode(personEmail);
emailCreate.appendChild(emailCreateNode)
tableRow.appendChild(emailCreate)

//Phone Number
var pnumberCreate = document.createElement("td")
var pnumberCreateNode = document.createTextNode(personNumber);
pnumberCreate.appendChild(pnumberCreateNode)
tableRow.appendChild(pnumberCreate)

//Gender
var genderCreate = document.createElement("td")
var genderCreateNode = document.createTextNode(personGender);
genderCreate.appendChild(genderCreateNode)
tableRow.appendChild(genderCreate)

//append to table.
var elementTitle = document.getElementById("tableRow")
elementTitle.appendChild(tableRow)

document.getElementById("dataForm").reset();
}


