window.addEventListener('scroll', function () {
  const myDiv = document.querySelector('header');
  const myDiv2 = document.getElementById('mbar');
  if (window.scrollY > 0) {
    myDiv.classList.add('scrolled');
  } else {
    myDiv.classList.remove('scrolled');
  }
  if (window.scrollY > 400) {
    myDiv2.classList.add('show');
    myDiv2.classList.remove('hide');
  } else {
    myDiv2.classList.add('hide');
  }
});
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
const stopScrollingCheckbox = document.getElementById('btn');
const content = document.getElementById('body');
stopScrollingCheckbox.addEventListener('change', function () {
  if (this.checked) {
    content.style.overflow = 'hidden';
  } else {
    content.style.overflow = 'auto';
  }
});
