var i = 0
function notready()
{
  alert("This function is not yet ready!");
}

function dont()
{
  if(i<3)
  {
  alert("...I said do not click this button");
  i = i+1;
  }
  else
  {
    alert("..........do whatever you want..........");
  }  
}

function pass()
{
  var id1 = "Byeongwoo";
  var password1 = "verysecretpassword";
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
function idiot()
{
  window.prompt("type in a number", "a number");
  confirm("you are an idiot!");
}
