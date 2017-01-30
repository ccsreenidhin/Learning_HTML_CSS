var a = 0, b = 0, c= 0;

function clicked(idn)
{

	if (idn == 'a')
		{
		document.getElementById("lk1").innerHTML = a+=1;
		}
	
	else if (idn == 'b')
		{
		document.getElementById("lk2").innerHTML = b+=1;
		}
	
	else if (idn == 'c')
		{
		document.getElementById("lk3").innerHTML = c+=1;
		}		
	else
		{
		window.alert("hi how r u");
		}

}


