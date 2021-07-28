
function compute()
{
    var principal = document.getElementById("principal").value,
     rate=document.getElementById("rate").value,
     years=document.getElementById("years").value;
    var interest=principal*years*rate/100;
      if(principal==undefined || principal<1)
     {
         alert('The Principal value must be Positive!');
         return;
     }
    
    var year=new Date().getFullYear()+parseInt(years);
     document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+principal+"</span>,\<br\>at an interest rate of  <span class='highlight'>"
         +rate+"%\ </span><br\>You will receive an amount of  <span class='highlight'>"+interest+" </span>,\<br\>in the year  <span class='highlight'>"+year+"\ </span><br\>";
    
    
}

function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
