(function(document, $) {
    "use strict";
    // when dialog gets injected
    $(document).on("dialog-ready", function() {
        $(".cq-dialog-showhide").each( function() {
            showHide($(this),true);
        });
    });

    $(document).on("change", ".cq-dialog-showhide .coral3-Select", function(e) {
        showHide($(this),false);
    });

    function showHide(el,onShow){
        var target;
        var targetClass;
        if(!onShow){
            targetClass = el.parents(".cq-dialog-showhide").data("cqDialogShowhideTarget");
        }else{
            targetClass = el.data("cqDialogShowhideTarget");
        }
        target = $(".dialog-action-select-box").find("coral-select-item:selected").val();
        $(targetClass).not(".hidden").addClass("hidden");
        $(targetClass+ "-"+target).removeClass("hidden");


    }

})(document,Granite.$);