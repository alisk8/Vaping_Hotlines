var video = document.querySelector("#your_vid");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}


function change_img(){
  var image = document.getElementById("img_to_change").src = "https://www.theladders.com/wp-content/uploads/Untitled-design-2020-10-23T123450.998.png"
}