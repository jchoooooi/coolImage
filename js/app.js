var imagePaths = ["images/coolImage1.png","images/coolImage2.png","images/coolImage3.png","images/coolImage4.png","images/coolImage5.png","images/coolImage6.png","images/coolImage7.png","images/coolImage8.png","images/coolImage9.png","images/coolImage10.png"]
imagePaths = shuffle(imagePaths);
var currentImageIndex = 0;

function addImageToDoc (src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
    // This next line will just add it to the <body> tag
}

var showImage = function(e)
{
	var currentImagePath = imagePaths[currentImageIndex];
	var image =addImageToDoc(currentImagePath, "150", "250", "hey");
	
	var xPosition = e.clientX;
	var yPosition = e.clientY;
	console.log(xPosition + ", " + yPosition);
	
	var centerX = xPosition - (Number(image.width)/2);
	var centerY = yPosition - (Number(image.height)/2);
	console.log(centerX + ", " + centerY);
	image.style.left = centerX +"px";
	image.style.top = centerY +"px";
	image.style.position = "absolute";

	document.body.appendChild(image);
	currentImageIndex ++;
	currentImageIndex = currentImageIndex % imagePaths.length;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

document.onclick = showImage;
