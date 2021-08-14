document.getElementById('vaccinated').style.display="none";
document.getElementById('vaccineName').style.display="none";
document.getElementById('vaccineDate').style.display="none";
function display() {
    if (document.getElementById('option1').checked) {
        // console.log("option1");
        document.getElementById('vaccinated').style.display="block";  
        document.getElementById('vaccineName').style.display="block";
        if (document.getElementById('dose1').checked) {
            document.getElementById('vaccineDate').style.display="block";
        }
        else{
            document.getElementById('vaccineDate').style.display="none";
        }
    }
    else if (document.getElementById('option2').checked) {
        // console.log("option2");
        document.getElementById('vaccinated').style.display="none";
        document.getElementById('vaccineName').style.display="none";
        document.getElementById('vaccineDate').style.display="none";
    }
}

function validateForm() {
    var a = document.forms["VaccineForm"]["name"].value;
    var b = document.forms["VaccineForm"]["age"].value;
    var c = document.forms["VaccineForm"]["parent"].value;
    var d = document.forms["VaccineForm"]["address"].value;
    var e = document.forms["VaccineForm"]["contact"].value;
    var f = document.forms["VaccineForm"]["vaccinated"].value;
    if ((a == null || a == "") || (b == null || b == "") || (c == null || c == "") || (d == null || d == "") || (e == null || e == "") || (f == null || f == "")) {
        console.log(a);
        console.log(f)
        if (f=="Yes") {
            var g=document.forms["VaccineForm"]["vaccineName"].value;
            var h=document.forms["VaccineForm"]["dose"].value;
            if ((g == null || g == "") || (h == null || h == "")){
                alert("Please fill all the fields");
                return false;
            }
            if (h=="dose1") {
                var i=document.forms["VaccineForm"]["doseDate"].value; 
                if (i==null || i=="") {
                    alert("Please fill all the fields");
                    return false;
                } 
            }
        }
        alert("Please fill all the fields");
        return false;
    }
}
