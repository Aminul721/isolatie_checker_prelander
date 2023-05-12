(function($){
    // select js code
    // jQuery('.select-field').click(function(){
    //     jQuery(this).parent().toggleClass('active');
    //     jQuery(this).parent().find('.select_item_box').slideToggle();
    // });

    // jQuery('body').click(function(e){
    //     if(!e.target.closest('.multi_selectbox')){
    //         jQuery('.multi_selectbox').removeClass('active');
    //         jQuery('.select_item_box').slideUp();
    //     }
    // });

    jQuery('.select_item_box input').click(function(){
        if(jQuery(this).parent().hasClass('allSelect')){
            if(this.checked){
                jQuery(this).parents('.tp_field_box_row').find('input').prop('checked', this.checked);
            } else{
                jQuery(this).parents('.tp_field_box_row').find('input').prop('checked', false);
            }
        }else{
            jQuery(this).parents('.tp_field_box_row').find('.allSelect input').prop('checked', false);
            let checkedItems = jQuery(this).parents('.tp_field_box_row').find('input:checked').length;
        }
    });
})(jQuery);

    