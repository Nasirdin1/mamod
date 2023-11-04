const change = (showed, img) => {
  if (showed.type === "password") {
    showed.type = "text";
    img.src = "./src/icons/showed.svg";
  } else {
    showed.type = "password";
    img.src = "./src/icons/hided.svg";
  }
};

function changeVis(e) {
  var showed = document.getElementById("inputPassword");
  var img = document.getElementById("img");
  change(showed, img);
}
function changeVisConf() {
  var showed = document.getElementById("inputConfirmPassword");
  var img = document.getElementById("imgConf");
  change(showed, img);
}
