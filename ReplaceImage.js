function ReplaceImage() {
  var image = document.getElementById('myImage');
  if (image.src.match('image1')) {
    image.src = 'ocr (6).jfif';
  } else {
    image.src = 'ocr (5).jfif';
  }
}