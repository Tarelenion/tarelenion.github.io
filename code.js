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
      document.getElementById("authorisedornot").innerhtml = "Welcome, you have the Information allowence class 1.";
    }
  else
    {
      document.getElementById("authorisedornot").innerhtml = "YOU ARE NOT AUTHORISED";
    }
}
