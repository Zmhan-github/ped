'use strict';

var data = {
    
    open: false,
    styleObject: {
        transform: 'translate(0px, 0px)'
    },
    
    toggleView: function() {
       if (this.open === true){
           this.open = false;
       } else {
           this.open = true;
       }
    },

};


var handlers = {
    handleView: function(e) {
        e.preventDefault();
        var viewportOffset = e.target.getBoundingClientRect();
        
        data.toggleView();
        
        if (data.open === true){
            document.body.style.top = '-'+ window.scrollY +'px';
            document.body.style.position = 'fixed';
            
            e.target.parentElement.classList.add('open');
            e.target.parentElement.style.transform = 
                'translate('+ viewportOffset.left * -1 +'px, '+ viewportOffset.top * -1 +'px)';
        } else {
            e.target.parentElement.classList.remove('open');
            e.target.parentElement.style.transform = 'translate(0px, 0px)';
            
            var scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY) * -1);
            
        }
    }
};