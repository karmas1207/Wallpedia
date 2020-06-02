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
}



const loading = document.querySelector('.loading');

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight}
  = document.documentElement;

  if(clientHeight + scrollTop >= scrollHeight - 5) {
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
