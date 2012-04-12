App.Events = (function(lng, app, undefined) {
    var makeSearch = function(){
        app.Services.getSearch(app.Data.getSearchTerm());
    }

    // makePullDown method. Calculates distance to top and container to make the pulldown. 
    var makePullDown = function(){
        var pulldown_offset_top = (lng.dom("#pullDown").offset().top);
        var container_top = (lng.dom("#tweet_container").offset().top);
        if (pulldown_offset_top >= container_top && !pulldown_offset_top <  container_top){
            lng.dom("#pullDown").toggleClass('loading');
            $$('.pullDownLabel').html('Actualizando ...');
            // update the request
            App.Data.setSearchTerm($$("#text_search_input").val());
            makeSearch();
           
        }

    };

    lng.dom('#search_button').tap(function(event) {
        if($$("#text_search_input").val() != ''){
            App.Data.setSearchTerm($$("#text_search_input").val());
            makeSearch();
        }
    })

    lng.dom('#tweet_container').on('longTap', function(){
        makePullDown();       
    });

    return {
        makeSearch:makeSearch,
        makePullDown:makePullDown
    }

})(LUNGO, App);