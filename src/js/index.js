import commonStyle from '../css/common.css';
import indexStyle from '../css/index.css';
import modulesStyle from '../css/modules.css';
import sidebar from '../js/sidebar.js';

sidebar.init();


$(document).on('focus','.text-module',function(){
    $(this).append('<span class="module-line"></span>');
})
$(document).on('blur','.text-module',function(){
    $(this).find('.module-line').remove();
})

$(document).on('mouseover','[data-type="main"]',function(){
    if($(this).find('.set-module').length < 1){
        $(this).append('<i class="set-module"></i>');
    }
})
$(document).on('mouseleave','[data-type="main"]',function(){
    $(this).find('.set-module').remove();
})