/* Author: 
- KS Chan (mrkschan@gmail.com)
*/

// Skills Tag-cloud
(function($) {
  var skills = $('#skills'),
      flag = $(skills).attr('tagcloud');

  if (flag !== 'enabled') {
    // skip if not enabled
    return;
  }

  function cloudify() {

    var ADVANCED_WEIGHT = 64,
        INTERMEDIATE_WEIGHT = 32,
        ELEMENTARY_WEIGHT = 16,
        h2 = $('h2', skills),
        ul = $('ul', skills),
        advanced = $('ul:eq(0) li', skills),
        intermediate = $('ul:eq(1) li', skills),
        elementary = $('ul:eq(2) li', skills),
        min_size = 14, min_size_def = $(skills).attr('minsize'),
        max_size = 32, max_size_def = $(skills).attr('maxsize'),
        tags = [],
        container = $('<div />', {'class': 'span-24 last push-2'});

    if (min_size_def) {
      min_size = parseInt(min_size_def);
    }
    if (max_size_def) {
      max_size = parseInt(max_size_def);
    }

    $(advanced).each(function(idx, el) {
      tags.push({
        'text': $(el).html(),
        'rel': ADVANCED_WEIGHT
      });
    });

    $(intermediate).each(function(idx, el) {
      tags.push({
        'text': $(el).html(),
        'rel': INTERMEDIATE_WEIGHT
      });
    });

    $(elementary).each(function(idx, el) {
      tags.push({
        'text': $(el).html(),
        'rel': ELEMENTARY_WEIGHT
      });
    });
    tags = $(tags).sort(function(a, b) {
      return $(a).attr('text').toLowerCase() > $(b).attr('text').toLowerCase();
    });

    $(h2).hide();
    $(ul).hide();

    $(tags).each(function(idx, el) {
      $(container).append($('<span />', {
        'style': 'display: inline-block; margin: 0 5px;',
        'html': $(el).attr('text'),
        'rel': $(el).attr('rel'),
      }));
    });
    $(container).appendTo(skills);

    $('span', container).tagcloud({
      size: {start: min_size, end: max_size, unit: "pt"}
    });
  }
  cloudify();
})(jQuery);
