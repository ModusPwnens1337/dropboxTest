var test = {};

test.page = {
    initialize: function () {
        
        /// *** Testing drag and drop
        
        $('.move-collapsible-up').on('tap',function(event) {
            event.stopPropagation();
            event.preventDefault();
            
            var currCollapseElem = $(this).parent().parent().parent();
            var prevCollapseElem = currCollapseElem.prev('div');
            
            /// detach and attach the add button
            currCollapseElem.insertBefore(prevCollapseElem);
            
            $('.sortable').collapsibleset('refresh');
        });
        
        $('.move-collapsible-down').on('tap',function(event) {
            event.stopPropagation();
            event.preventDefault();
            
            var currCollapseElem = $(this).parent().parent().parent();
            var nextCollapseElem = currCollapseElem.next('div');
            
            /// detach and attach the add button
            currCollapseElem.insertAfter(nextCollapseElem);
            
            $('.sortable').collapsibleset('refresh');
        });
        
        /// *** Testing event binding
        
        var counter = 0;

        $(".test").click(function() {
            $("h2").append("<p class='test'>click me " + (++counter) + "</p>");
        });

        // With on():

        $("h2").on("click", "p.test", function(){
            alert($(this).text());
        });

        
//        $(document).on("pageshow","#test",function(){
//            $( ".sortable" ).sortable();
//            $( ".sortable" ).disableSelection();
//            /// Refresh list to the end of sort to have a correct display
//            $( ".sortable" ).bind( "sortstop", function(event, ui) {
//                $('.sortable').collapsibleset('refresh');
//            });
//        });
        
        /// JQuery Mobile page events.
//        $(document).on("pagebeforeshow","#patientInfo",function(){ // When entering patientInfo
//            console.log("patientInfo is about to be shown");
//        });
//        $(document).on("pageshow","#patientInfo",function(){ // When entering patientInfo
//            console.log("patientInfo is now shown");
//        });
//        $(document).on("pagebeforehide","#patientInfo",function(){ // When leaving patientInfo
//            console.log("patientInfo is about to be hidden");
//        });
//        $(document).on("pagehide","#patientInfo",function(){ // When leaving patientInfo
//            console.log("patientInfo is now hidden");
//        });
    }

};
