var display = document.querySelector('#display');

var user = {};

function saveInfo(){
user.cabin = document.querySelector('#cabin').options[document.querySelector('#cabin').selectedIndex].value;
user.fName = document.querySelector('#fName').value;
user.lName = document.querySelector('#lName').value;
user.phoneNumber = document.querySelector('#phoneNumber').value;
user.address = document.querySelector('#address1').value;
user.city = document.querySelector('#city').value;
user.state = document.querySelector('#state').options[document.querySelector('#state').selectedIndex].value;


alert(`${user.cabin}\n${user.fName}\n${user.lName}\n${user.phoneNumber}\n${user.address}\n${user.city}\n${user.state}`);

}
