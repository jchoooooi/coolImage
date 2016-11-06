var showImage = function(e)
{
	var imageArray = document.getElementsByClassName('showableImage hidden');
	var image = imageArray[0];
	image.className = "showableImage";

	var xPosition = e.clientX;
	var yPosition = e.clientY;
	console.log(xPosition + ", " + yPosition);
	
	var centerX = xPosition - (Number(image.clientWidth)/2);
	var centerY = yPosition - (Number(image.clientHeight)/2);
	console.log(centerX + ", " + centerY);
	image.style.left = centerX +"px";
	image.style.top = centerY +"px";
}

document.onclick = showImage;
