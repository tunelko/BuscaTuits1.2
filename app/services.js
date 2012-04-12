App.Services = (function(lng, app, undefined) {

    var getSearch = function(search_term){
        var twitter_params = {
            q : encodeURIComponent(search_term),
            result_type : 'recent',
            rpp : '20',
            // include_entities: 'false',
            callback : '?'
        };

        var twitter_search_url = "http://search.twitter.com/search.json";
        //  Growl caragando ...
        lng.Sugar.Growl.show (' Espere', '',  'loading', true, 0);

        $$.get(twitter_search_url, twitter_params, function(response){
            // solo queremos tweets
            data = response.results;
            var data_to_bind = [];
            var data_to_insert = [];
            var to_user = '';
            var url = '';
            var vacio = false;

            if (data.length == 0){

                var vacio = true;

                data_to_bind.push({
                    tweet_text : "¡ No hay resultados !",
                    tweet_author: '<a href="#back"" data-target="section" data-icon="target">Volver al término de búsqueda</a>',
                    tweet_touser: '',
                    // tweet_url: url,
                    profile_image_url: 'assets/images/icon-72.png'
                });

            }
            for (var i = 0; i < data.length; i++){
                if (data[i]['to_user']){
                    to_user = "<div class='bubble red onright'>Tweet con: @" + data[i]['to_user'] +"</div>";
                }else{
                    to_user = '';
                }

                data_to_bind.push({
                    tweet_date: data[i]['created_at'].replace("+0000",""),
                    tweet_text : "<a href='https://twitter.com/#!/"+ data[i]['from_user']+"/status/"+ data[i]['id_str'] + "' target='_self'>"+data[i]['text']+"</a>",
                    tweet_author: '@ '+ data[i]['from_user'],
                    tweet_touser: to_user,
                    // tweet_url: url,
                    profile_image_url: data[i]['profile_image_url']
                });
            }

            // db local To-Do.
            // App.Data.cacheTweets(data_to_insert);
            App.View.render_list(data_to_bind);
            

            //ocultamos loading ...
            lng.Sugar.Growl.hide();
            if (vacio === true){
                // quitar pulldown.
                $$("#pullDown").remove();
            }

        }

        );
    }

    return {
        getSearch: getSearch
    }

})(LUNGO, App);