window.onload = function () {
  let warning = document.getElementById("error");
  document.getElementById("login").addEventListener("click", function(){
    let email = document.getElementById("email");
    let password = document.getElementById("pwd1");
    if (email.value === "barniclassic@gmail.com" && password.value === "Hello123") {
      alert("Login successfully");
      window.location.href = "http://127.0.0.1:5501/WAPproject/adminDash.html";
    }else {
        alert("Your email and password combination is incorrect");
        warning.style.visibility = "visible"; 
    }
  });
}
