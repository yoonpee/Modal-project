const modal = document.querySelector('.modal');
const preview = document.querySelectorAll('.gallery img');
const original = document.querySelector('.pic');
const imagText = document.querySelector('.caption');

preview.forEach((prev)=>{
  prev.addEventListener('click',()=>{
      modal.classList.add('open');
      original.classList.add('open');

      const originalSrc = prev.getAttribute("data-original");
      original.src = `./image/${originalSrc}`;
      
      const altText = prev.alt;
      imagText.innerText = altText;
  })  
})

modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})