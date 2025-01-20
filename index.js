// console.log('script connected');





let a;
a = document.querySelector('.cross');
a.style.display = 'none';

let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click",  ()=> {
 document.querySelector('.sidebar').classList.toggle('sidebarNotDsisp');
  if ( document.querySelector('.sidebar').classList.contains('sidebarNotDsisp')) {
    document.querySelector('.ham').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none'
  }
  else{
    document.querySelector('.ham').style.display = 'none'
    setTimeout( () => {
      document.querySelector('.cross').style.display = 'inline';
    },580)

  }
})




