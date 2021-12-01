let str = "12546";

for (let i = 0; i < str.length; i++) {
  let arr = []
  if (str[i] % 2 == 1) {
    str[i]
  }
}

let box = document.querySelector(".box");

box.addEventListener('click', data)

function data() {
  let selector = document.querySelector(".box");
  if (selector.style.float == "right") selector.style.float = "left";
  else selector.style.float = "right";
}
setInterval(data, 1000);
