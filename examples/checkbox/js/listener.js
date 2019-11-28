(function(document, $) {
    "use strict";
    // when dialog gets injected
    $(document).on("dialog-ready", function() {
        $(".cq-dialog-checkbox-showhide .coral3-Checkbox").each( function() {
            showHide($(this),true);
        });
    });

    $(document).on("click", ".cq-dialog-checkbox-showhide .coral3-Checkbox", function(e) {
        showHide($(this),false);
    });

    function showHide(el,onshow){

        // get the selector to find the target elements. its stored as data-.. attribute
        var targetClass = el.parents(".cq-dialog-checkbox-showhide").data("cqDialogCheckboxShowhideTarget");
        // is checkbox checked?
        var checked = el.prop('checked');
        var showDefault=false;
        if(onshow&&!checked||!onshow&&checked){
            showDefault=true;
        }

        if(showDefault){
            $(targetClass).removeClass("hidden");
            $(targetClass+ "-false").not(".hidden").addClass("hidden");
        }else{
            $(targetClass+ "-false").removeClass("hidden");
            $(targetClass).not(".hidden").addClass("hidden");
        }
    }

})(document,Granite.$);