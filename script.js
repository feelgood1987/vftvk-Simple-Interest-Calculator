
function compute()
{
    var principal = document.getElementById("principal").value,
     rate=document.getElementById("rate").value,
     years=document.getElementById("years").value;
    var interest=principal*years*rate/100;
    var year=new Date().getFullYear+parseInt(years);
     document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}

function updateRate(){
    var reteval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
