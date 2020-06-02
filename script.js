async function getImg(){
        let all = []
        let collection = {}
        for (let i = 1; i < 7; i++) {
            var randomNumber = Math.floor(Math.random() * 30) + 1;
            var imgName = randomNumber + ".png";
            let src = "wp" + "/" + imgName;
            all.push([src, randomNumber])
            if (!collection[randomNumber]) {
                collection[randomNumber] = 1;
            } else {
                collection[randomNumber] += 1;
            }
        }
        for (image of all) {
            src = image[0]
            randomNumber = image[1]
            percent = collection[randomNumber] / 30
            document.getElementById("all-images").innerHTML += `<div class="responsive">
              <div class="gallery">
                    <img id="myImg" class="myImages" src=${src}>
              </div>
            </div>`
        }
        document.getElementById("all-images").innerHTML += `<div class="responsive-bonus">
          <div class="gallery">
                <img id="myImg" class="myImages-bonus" src=${src}>
          </div>
        </div>`

}

getImg();

const loading = document.querySelector('.loading');

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight}
  = document.documentElement;

  if(clientHeight + scrollTop >= scrollHeight - 15) {
   showLoading();
  }
});

function showLoading() {
  document.getElementById("loadingId").style.display = "flex";
setTimeout(getImg, 1000)
setTimeout(hideLoading, 1000)
}

function hideLoading() {
  document.getElementById("loadingId").style.display = "none";
}

mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
modal.style.display = "none";
document.getElementById("site").style.overflow = "auto";
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("colors");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById("moreColors").style.display = "none";
  document.getElementById("lessColors").style.display = "block";
}

function closeTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("colors");
  for (i = 5; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "none";
  document.getElementById("moreColors").style.display = "block";
  document.getElementById("lessColors").style.display = "none";
}

var images = document.getElementsByClassName('myImages');
var modal = document.getElementById("myModal");
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

  for (var i = 0; i < images.length; i++) {
      var img = images[i];
      img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = 'To download - Right click and press "Save picture as.."';
      document.getElementById("site").style.overflow = "hidden";
      mybutton.style.display = "none";
    }
  }
console.log(images);
