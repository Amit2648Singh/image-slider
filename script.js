const slider = document.getElementById("slider");

let i = 1;
setInterval(() => {
  if (i <= 4) {
    i++;
    // console.log("slider 123", i);
  } else {
    i = 1;
  }
  slider.src = i + ".jpg";
}, 2000);
