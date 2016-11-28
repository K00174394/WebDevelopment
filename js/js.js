function validateForm() {
    
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["contact"].value;
    var z = document.forms["myForm"]["email"].value;
    var a = document.forms["myForm"]["comment"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    
    
    
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
    
     if (y == null || y == "") {
        alert("Contact must be filled out");
        return false;
    }
    
     if (z == null || z == "") {
        alert("Email must be filled out");
        return false;
    }
    if (a == null || a == "") {
        alert("Comment must be filled out");
        return false;
    }
    if (isNaN(y)) 
  {
    alert("Must input numbers");
    return false;
  }
    
    
}

function reset(){
	
	document.getElementById("myForm").reset();

}