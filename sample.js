const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
function changeReg(){
  window.location.href='index3.html'
}
function youinsta(){
  window.location.href='index3.html'
}
function youtwitter(){
  window.location.href='cabinet.html'
}
function youlinkdin(){
  window.location.href='index3.html'
}
function brosabouttostreamsurgeonsimulator(){
  window.location.href='index3.html'
}
function changer(){
  var element = document.getElementById("login");

  if (element) {
    var display = element.style.display;

    if (display == "none") {
        element.style.display = "block";
        document.getElementById("reg").style.display="none";
        document.getElementById("btntype").innerHTML = "Qeydiyyatdan keç";
    } else {
        element.style.display = "none";
        document.getElementById("reg").style.display="block";
        document.getElementById("btntype").innerHTML = "Daxil olun";
    }
  }
}


//cabinet navigation from faeliat
function cabinet(){
  window.location.href='cabinet.html'
}


function HaqCV(){
  var element = document.getElementById("HAQ");

  if (element) {
    var display = element.style.display;

        element.style.display = "block";
        document.getElementById("CV").style.display="none";
        document.getElementById("cv").style.background="none";
        document.getElementById("cv").style.color="#6B7379";
        document.getElementById("haq").style.background="#4BC9FE";
        document.getElementById("haq").style.color="#fff";
        document.getElementById("btntype").innerHTML = "Qeydiyyatdan keç";
  }
}
function CVHaq(){
  var element = document.getElementById("CV");

  if (element) {
    var display = element.style.display;

        element.style.display = "block";
        document.getElementById("HAQ").style.display="none";
        document.getElementById("haq").style.background="none";
        document.getElementById("haq").style.color="#6B7379";
        document.getElementById("cv").style.background="#4BC9FE";
        document.getElementById("cv").style.color="#fff";
        document.getElementById("btntype").innerHTML = "Qeydiyyatdan keç";
  }
}

function CVHaq(){
  var element = document.getElementById("CV");

  if (element) {
    var display = element.style.display;

        element.style.display = "block";
        document.getElementById("HAQ").style.display="none";
        document.getElementById("haq").style.background="none";
        document.getElementById("haq").style.color="#6B7379";
        document.getElementById("cv").style.background="#4BC9FE";
        document.getElementById("cv").style.color="#fff";
        document.getElementById("btntype").innerHTML = "Qeydiyyatdan keç";
  }
}

function closeprofset(){
  document.getElementById("info-changer").style.display='none'
}
function savepls(){
  if(document.getElementById('birthdate').value!=' '||'')
  document.getElementById('settedbirthdate').innerHTML=(document.getElementById('birthdate').value)

  if(document.getElementById('about-you').value!=' '||'')
  document.getElementById('settedabout-you').innerHTML=(document.getElementById('about-you').value)

  if(document.getElementById('WebPage').value!=' '||'')
  document.getElementById('settedWebPage').innerHTML=(document.getElementById('WebPage').value)

  if(document.getElementById('instaset').value!=' '||'')
  document.getElementById('instasetted').onclick.window.location.href=(document.getElementById('instaset').value)
}

function getFile() {
  document.getElementById("upfile").click();
  document.getElementsByClassName("filelen").innerHTML = "file selected";
}

function Haqqinda(){
  document.getElementById("names-cont").style.display='none'
  document.getElementById("ted-btn").style.border='none'
  document.getElementById("haqq").style.display='block'
  document.getElementById("haq-btn").style.border='2px solid #0192cb'
}

function Tedq(){
  document.getElementById("names-cont").style.display='block'
  document.getElementById("haq-btn").style.border='none'
  document.getElementById("haqq").style.display='none'
  document.getElementById("ted-btn").style.border='2px solid #0192cb'
}

function editmode(){
  document.querySelectorAll('.in-check').forEach(function(el) {
    if(el.style.display=='block')
    el.style.display = 'none';
    else{
      el.style.display = 'block'; 
    }
  })
}

function contentselector(){
  document.getElementById('newcont').style.display='none'
  document.getElementById('selector').style.display='block'
}

function inov(){
    document.querySelectorAll('.inov').forEach(function(el) {
      if(el.style.display=='block'){
        el.style.display = 'none';
        this.document.querySelector('.limbo-in').style.border='2px solid #0192cb'
      }
      else{
        el.style.display = 'block'; 
        this.document.querySelector('.limbo-in').style.border='none'
      }
   });
}

function nesr(){
  
  document.querySelectorAll('.nesr').forEach(function(el) {
    if(el.style.display=='block'){
      el.style.display = 'none';
      this.document.querySelector('#nesr').style.border='2px solid #0192cb'
    }
    else{
      el.style.display = 'block'; 
      this.document.querySelector('#nesr').style.border='none'
    }
 });
}

function tedbib(){
  
  document.querySelectorAll('.tedbib').forEach(function(el) {
    if(el.style.display=='block'){
      el.style.display = 'none';
      this.document.querySelector('#tedbib').style.border='2px solid #0192cb'
    }
    else{
      el.style.display = 'block'; 
      this.document.querySelector('#tedbib').style.border='none'
    }
 });
}

function ekh(){
  
  document.querySelectorAll('.ekh').forEach(function(el) {
    if(el.style.display=='block'){
      el.style.display = 'none';
      this.document.querySelector('#ekh').style.border='2px solid #0192cb'
    }
    else{
      el.style.display = 'block'; 
      this.document.querySelector('#ekh').style.border='none'
    }
 });
}

function sbb(){
  
  document.querySelectorAll('.sbb').forEach(function(el) {
    if(el.style.display=='block'){
      el.style.display = 'none';
      this.document.querySelector('#sbb').style.border='2px solid #0192cb'
    }
    else{
      el.style.display = 'block'; 
      this.document.querySelector('#sbb').style.border='none'
    }
 });
}
