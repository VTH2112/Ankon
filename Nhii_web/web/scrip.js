

let Myform = document.getElementById("Myform");
let allInput = Myform.getElementsByTagName("input");
let msg1 = document.getElementById("msg1");
Myform.onsubmit = onSubmit;

function onSubmit() {


    var datalogin = document.loginform.loginuser.value;


    if (Myform.reportValidity()) {

        msg1.innerText = "HI" + " " + datalogin;
        $('.containermain').show('slow');
        $('.bodyform').hide();
        $('.bar-menu').hide();
        $('.loginbox').hide();
        return false;
    }


}
