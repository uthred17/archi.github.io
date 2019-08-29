const slider_content = document.getElementById('box');


  	
    const image = ['Images/eiffelt','Images/fernsehturm','Images/dubai-cityscape', 'Images/operahousenight', 'Images/london', 'Images/tajmahal'];

    var i = image.length;


    

    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
    }


    

    function prewImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

    }

setInterval(nextImage, 5000);
