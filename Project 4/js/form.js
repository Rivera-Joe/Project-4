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
        user.bookDate = document.querySelector('#bookDate').value;

        var userConfirm = confirm(`Please verify the information below is correct:\nCabin: ${user.cabin}\nBooking Date: ${user.bookDate}\nFirst Name: ${user.fName}\nLast Name: ${user.lName}\nPhone Number: ${user.phoneNumber}\nAddress: ${user.address}\nCity: ${user.city}\nState: ${user.state}`);

        if(userConfirm == true){
            alert(`Booking for ${user.fName} ${user.lName} on ${user.bookDate} created`);

        }



}
