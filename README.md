# BuscaTuits (LungoJS 1.2 version)
Another twitter search webapp with pulldown to refresh ;-). LungoJS is a fantastic pure HTML5 framework to work with and oriented to mobile devices. 
This webapp search for an input topic and lists tweets with 'pulldown to refresh' on LungoJS v1.2.

## LungoJS modifications:

- Implemented prepend method to iScroll.
  
  /**
     * Prepend <markup>; content to iScroll instance
     *
     * @method append
     *
     * @param {string} Id of the container scroll.
     * @param {string} Markup content
     */
    var prepend = function(id, content) {
        var container = _getContainer(id);
        container.prepend(content);

        _render(id);
    };

## About Lungo:

[Source code](https://github.com/TapQuo/Lungo.js) and [issue tracking](http://github.com/TapQuo/Lungo.js/issues) are available on Github.

### Learn more about the LungoJS project
The author [Javi Jiménez Villar](http://twitter.com/soyjavi) is convinced that the webapp should be distributed via HTTP and were HTML5. If you want to know more about the project you have some interesting links:

- Visit LungoJS [Site](http://www.lungojs.com/).
- [How to use](http://www.lungojs.com/how-to-use/)
- [JavaScript API](http://www.lungojs.com/api/) 
- [About](http://www.lungojs.com/about/) the author and contributors.
- [Watch Screencasts video preview](http://www.lungojs.com/screencasts//) to see it in action.

### Lungo.js credits
Created by [Javier Jiménez](http://twitter.com/soyjavi).
Maintained by [Javier Jiménez](http://twitter.com/soyjavi) & [Guillermo Pascual](http://twitter.com/pasku1).
