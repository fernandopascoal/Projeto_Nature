


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
  
  var container = document.querySelectorAll(".colapse_content")[0].style.display;

  if (container === "none") {
    document.querySelectorAll(".colapse_content")[0].style.display = "flex";
    document.querySelectorAll(".colapse_menu")[0].style.background = "white";
    document.querySelectorAll(".colapse_title")[0].style.color = "black";
    document.querySelectorAll(".line")[0].style.margin = "0px";
    document.querySelectorAll(".colapse_icon")[0].src = "images/uparrow.png"
  } else {
    document.querySelectorAll(".colapse_content")[0].style.display = "none";
    document.querySelectorAll(".colapse_menu")[0].style.background = "gray";
    document.querySelectorAll(".colapse_title")[0].style.color = "white";
    document.querySelectorAll(".line")[0].style.margin = "0px 10px";
    document.querySelectorAll(".colapse_icon")[0].src = "images/darrow.png"
  }
}


function mostrar2() {
  
  var container = document.querySelectorAll(".colapse_content")[1].style.display;

  if (container === "none") {
    document.querySelectorAll(".colapse_content")[1].style.display = "flex";
    document.querySelectorAll(".colapse_menu")[1].style.background = "white";
    document.querySelectorAll(".colapse_title")[1].style.color = "black";
    document.querySelectorAll(".line")[1].style.margin = "0px";
    document.querySelectorAll(".colapse_icon")[1].src = "images/uparrow.png"
  } else {
    document.querySelectorAll(".colapse_content")[1].style.display = "none";
    document.querySelectorAll(".colapse_menu")[1].style.background = "gray";
    document.querySelectorAll(".colapse_title")[1].style.color = "white";
    document.querySelectorAll(".line")[1].style.margin = "0px 10px";
    document.querySelectorAll(".colapse_icon")[1].src = "images/darrow.png"
  }
}


function mostrar3() {
  
  var container = document.querySelectorAll(".colapse_content")[2].style.display;

  if (container === "none") {
    document.querySelectorAll(".colapse_content")[2].style.display = "flex";
    document.querySelectorAll(".colapse_menu")[2].style.background = "white";
    document.querySelectorAll(".colapse_title")[2].style.color = "black";
    document.querySelectorAll(".line")[2].style.margin = "0px";
    document.querySelectorAll(".colapse_icon")[2].src = "images/uparrow.png"
  } else {
    document.querySelectorAll(".colapse_content")[2].style.display = "none";
    document.querySelectorAll(".colapse_menu")[2].style.background = "gray";
    document.querySelectorAll(".colapse_title")[2].style.color = "white";
    document.querySelectorAll(".line")[2].style.margin = "0px 10px";
    document.querySelectorAll(".colapse_icon")[2].src = "images/darrow.png"
  }
}

function mostrar4() {
  
  var container = document.querySelectorAll(".colapse_content")[3].style.display;

  if (container === "none") {
    document.querySelectorAll(".colapse_content")[3].style.display = "flex";
    document.querySelectorAll(".colapse_menu")[3].style.background = "white";
    document.querySelectorAll(".colapse_title")[3].style.color = "black";
    document.querySelectorAll(".line")[3].style.display = "block";
    document.querySelectorAll(".line")[3].style.margin = "0px";
    document.querySelectorAll(".colapse_icon")[3].src = "images/uparrow.png"
  } else {
    document.querySelectorAll(".colapse_content")[3].style.display = "none";
    document.querySelectorAll(".colapse_menu")[3].style.background = "gray";
    document.querySelectorAll(".colapse_title")[3].style.color = "white";
    document.querySelectorAll(".line")[3].style.display = "none";
    document.querySelectorAll(".colapse_icon")[3].src = "images/darrow.png"
  }
}

function verificar() {
  let erro = document.querySelector('#erro').style.display = "flex";
  if(document.querySelectorAll(".input_campo")[0].value.length < 1 ) {
    erro;
    document.querySelector("#nome").style.border = "2px solid red";
  } else if (document.querySelectorAll(".input_campo")[1].value.length < 1 ){
    erro;
  } else if (document.querySelectorAll(".input_campo")[2].value.length < 1 ){
    erro;
  } else if (document.querySelectorAll(".input_campo")[3].value.length < 1 ) {
    erro;
  }
}


