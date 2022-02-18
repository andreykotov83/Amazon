
// ACCORDION

let accordionOpen = document.querySelectorAll('.accordion__wrapper');

accordionOpen.forEach((item) => {

    let itemBody = item.querySelector('.accordion__text')
    let itemHeight = itemBody.clientHeight;
    
    itemBody.style.height = '0px'

    item.querySelector('.accordion__head').onclick = function(){
        let accordionBody = this.closest('.accordion__wrapper').querySelector('.accordion__text')
        accordionBody.classList.toggle('.accordion__text-open')
        
        if(accordionBody.classList.contains('.accordion__text-open') ){
            itemBody.style.height = itemHeight+'px';
            console.log(accordionBody)
        }else
        itemBody.style.height = '0px'
    }
});

     //     BURGER-MENU
     const btn = document.querySelector('.menu-btn');
     const nav = document.querySelector('.sidenav');
     
     btn.addEventListener('click',()=>{ 
         nav.classList.toggle('active')
         btn.classList.toggle('clicked')
     });
     