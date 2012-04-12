App.View = (function(lng, app, undefined) {

    var tweet_template_markup = "<li data-icon='user'>\n\
            <img src='{{profile_image_url}}' />\
            {{tweet_author}} {{tweet_date}} {{tweet_touser}}<strong>{{tweet_text}} </strong> <small> {{tweet_url}}</small> </li>";
    // Template for tweets
    lng.View.Template.create('tweet_template', tweet_template_markup);

    //  render list & pulldown-to-refresh
    var render_list = function(tweets){
        lng.View.Template.List.create ({
            el : '#tweet_container',
            template: 'tweet_template',
            data: tweets
        });

        var markup_content = '<div id="pullDown"><span class="pullDownIcon"></span><span class="pullDownLabel">Arrastra hacia abajo para actualizar ...</span></div>';
        lng.View.Scroll.prepend('tweet_container', markup_content);
    
    }

    return{
        render_list:render_list
    }

})(LUNGO, App);