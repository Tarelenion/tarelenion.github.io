function notready()
{
  alert("This function is not yet ready!");
}

function pass()
{
  var id1 = "Byeongwoo";
  var password1 = "rlaquddn";
  var idinput = document.getElementById("ID").value;
  var passwordinput = document.getElementById("password").value;
  if(idinput == id1 && passwordinput == password1)
    {
      document.getElementById("authorisedornot").innerHTML = "Welcome, you have the Information allowence class 1.";
    }
  else
    {
      document.getElementById("authorisedornot").innerHTML = "YOU ARE NOT AUTHORISED";
    }
  document.getElementById("authorisedornot").innerHTML = "wtf";
}
