


function capa1() {
  remove()
  document.querySelector('.slidershow').classList.add('item1');

}

function capa2() {
  remove()
  document.querySelector('.slidershow').classList.add('item2');

}

function capa3() {
  remove()
  document.querySelector('.slidershow').classList.add('item3');

}

function remove() {
  document.querySelector('.slidershow').classList.remove('item1')
  document.querySelector('.slidershow').classList.remove('item2')
  document.querySelector('.slidershow').classList.remove('item3')
}


function rightarrow() {

}


function mostrar1() {
  let close = document.querySelectorAll(".colapse_content")[0].style.display = "none";
  let open = document.querySelectorAll(".colapse_content")[0].style.display = "flex";

  if (close) {
    document.querySelectorAll(".colapse_content")[0].style.display = "flex";
    document.querySelectorAll(".colapse_menu")[0].style.background = "white";
    document.querySelectorAll(".colapse_menu")[0].style.border_radius = "5px";
    document.querySelectorAll(".colapse_title")[0].style.color = "black";
    document.querySelectorAll(".colapse.icon")[0].setAttribute('src', 'images/uparrow.png');
  } else {
    document.querySelectorAll(".colapse_content")[0].style.display = "none";
  }
}

function mostrar2() {
  document.querySelectorAll(".colapse_content")[1].style.display = "flex";
}

function mostrar3() {
  document.querySelectorAll(".colapse_content")[2].style.display = "flex";
}

function mostrar4() {
  document.querySelectorAll(".colapse_content")[3].style.display = "flex";
}
