
var interval = 4000; 
var switching = setInterval("slideshow(1)", interval);


function slideshow(n)
{
    
    var currents;
    var slists = document.getElementsByClassName("hideable"); //get all slides in <div class =slides>
   
    // find the current image------------------
    
    for (i = 0; i < slists.length; i++)
        {
            if(slists[i].style.display == "block")
                {
                    currents = i;
                }
        }
    
    //-------------------------------------------
        
    
    slists[currents].style.display = "none"; // hide the current image
    
    
    if(n==0)
    {
        var disp = prev(currents, slists.length); //get previous slide
    }
    else if(n==1)
    {
        var disp = next(currents, slists.length); //get the next slide
    }
    
    
    slists[disp].style.display = "block"; //disp the req slide
  

}

// function to get previous slide
function prev(sno, slength)
{
    //window.alert("prev fn");
    if(sno == 0) 
        return slength-1;
    else 
        return sno-1;
}

//function to get next slide
function next(sno, slength)
{
    //window.alert("next fn");
    if(sno == slength-1)
        return 0;
    else 
        return sno+1;
}

