function replaceParagraphWithImage() {
  var paragraph = document.getElementById("myParagraph");
  var image = document.createElement("img");
  image.src = "Media/paella.jpg";
  image.alt = "An Image";
  paragraph.parentNode.replaceChild(image, paragraph);
}

replaceParagraphWithImage();
