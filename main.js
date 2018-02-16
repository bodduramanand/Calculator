//calC

function c(val)
{
document.getElementById("forscreen").value=val;
}
function v(val)
{
document.getElementById("forscreen").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("forscreen").value)) 
} 
catch(e) 
{
  c('Error!') 
} 
}  

function nowReset() {
	document.getElementById("myform").reset();
}