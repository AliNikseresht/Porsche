let flag = 1
let m = document.getElementById('mobile')
let _h = document.getElementById('mobile').clientHeight

document.getElementById('mobile').style.height=0+'px'
function _dropMenu(self){
    _span = self.children

    if(flag % 2){
            _span[0].style.transform='rotate(42deg)'
            _span[1].style.transform='translateX(200px)'
            _span[2].style.transform='rotate(-42deg)'
            document.getElementById('mobile').style.transform='translateX(0)'

    }else{
        _span[0].style.transform='rotate(0)'
        _span[1].style.transform='translateX(0)'
        _span[2].style.transform='rotate(0)'
        document.getElementById('mobile').style.transform='translateX(-200%)'

    }
    flag++
}
////////Menu---Mobile-----Finish//////////

// busSliderStart********--------------
const carousel = document.querySelector('.carousel'),
firstImg = carousel.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.wrapper>i');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 40;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = ()=>{
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
  icon.addEventListener('click', () =>{
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    showHideIcons()
  })
});

const dragStart = (e) => {
  isDragStart = true
  prevPageX = e.pageX
  prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  if(!isDragStart) return
  e.preventDefault();
  // isDragging = true;
  carousel.classList.add('dragging')
  positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff
  // showHideIcons(); 
}

const dragStop = () =>{
  isDragStart = false
  carousel.classList.remove('dragging')

  // if(!isDragging) return;
  // isDragging = false;
  // autoSlide();
}

carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('mouseup', dragStop)
carousel.addEventListener('mouseleave', dragStop)

// bus---Slider----End////////////