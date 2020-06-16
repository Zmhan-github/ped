const body = document.querySelector('.o-page');
const listItem = [...document.querySelectorAll('.c-results__item')];


listItem.forEach((item) => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        let viewportOffset = item.getBoundingClientRect();
        
        if (!item.classList.contains('is-active')) {
            
            body.style.top = `-${window.scrollY}px`;
            body.style.position = 'fixed';
            
            
            item.style.transform = 
                `translate(${viewportOffset.left * -1}px,${viewportOffset.top * -1}px)`;
        } else {
            
            item.style.transform = 'translate(0px, 0px)';
            
            let scrollY = body.style.top;  
            body.style.position = '';
            body.style.top = '';
            
            window.scrollTo(0, parseInt(scrollY) * -1);
        }
        
        item.classList.toggle('is-active');
    })
})