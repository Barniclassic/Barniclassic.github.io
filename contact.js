window.onload = function() {
    let message = [{email: "barniclassic@gmail.com", fName: "Barnabas", lName: "Berhanu", gender: "male",comment: "Hello it's me."},
                    {email: "barniclassic@miu.edu", fName: "Barnabas", lName: "Berhanu", gender: "male",comment: "Hello! Hello! it's me again."}]

    localStorage.setItem("messages", JSON.stringify(message));
    let messages = localStorage.getItem('messages');
    let myMessage = JSON.parse(messages);
    document.getElementById("contactMe").addEventListener("click", function(){
        let email = document.getElementById("email");
        let fName = document.getElementById("fname");
        let lName = document.getElementById("lname");
        let gender = "";
        if(document.getElementById("radio1").checked){
            gender = "male";
        }else{
            gender = "female";
        }
        let comment = document.getElementById("message");
        let obj={
            email: email.value,
            fName: fName.value,
            lName: lName.value,
            gender: gender,
            comment: comment.value 
        };
        myMessage.push(obj);
        document.getElementById("email").value= null;
        document.getElementById("fname").value = null;
        document.getElementById("lname").value = null;
        document.getElementById("message").value = null;
        localStorage.setItem("messages", JSON.stringify(myMessage));
    })
       
} 
