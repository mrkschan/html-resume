/* Author:
- KS Chan (mrkschan@gmail.com)
*/

function __is_print() {
  var search = window.location.search;
  return (search.indexOf('format=print') > -1);
}


// Toys Tag-cloud
(function($) {
  var container = $('#tagcloud');

  if (container.length < 1) {
    // skip if no #tagcloud div
    return;
  }

  function cloudify() {
    var ADVANCED_WEIGHT = 64,
        INTERMEDIATE_WEIGHT = 32,
        ELEMENTARY_WEIGHT = 16,
        toys = $('#toys'),
        h2 = $('h2', toys),
        ul = $('ul', toys),
        advanced = $('ul:eq(0) li', toys),
        intermediate = $('ul:eq(1) li', toys),
        elementary = $('ul:eq(2) li', toys),
        min_size = 10, min_size_def = $(container).attr('data-min-font-size'),
        max_size = 16, max_size_def = $(container).attr('data-max-font-size'),
        tags = [];

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

    $(h2).addClass('hidden');
    $(ul).addClass('hidden');

    $(tags).each(function(idx, el) {
      $(container).append($('<span />', {
        'style': 'display: inline-block; margin: 0 5px;',
        'html': $(el).attr('text'),
        'rel': $(el).attr('rel')
      }));
    });
    $(container).append($('<div />', {
      'class': 'prepend-16 span-8 last',
      'html': '(The bigger the name, the longer time I spent in...)'
    }));
    $(container).appendTo(toys);

    $('span', container).tagcloud({
      size: {start: min_size, end: max_size, unit: "pt"}
    });
  }
  cloudify();
})(jQuery);


// Scroll to anchor & sidebar nav
(function($) {
  $(document).ready(function() {
    $("a.anchorLink").anchorAnimate({speed: 500});
    $('nav ul').transform({rotate: '90deg', origin: ['0px', '35px']});
  });
})(jQuery);


// Content layout
(function($) {
  $(document).ready(function() {
    var education = $('#education > div'),
        experience = $('#experience > div'),
        footer = $('footer'),
        header = $('header');

    $('section > div').addClass('span-24 last');

    $('h2', experience).addClass('span-12 append-7');
    $('p', experience).addClass('span-5 last');
    $('h3', experience).addClass('span-24 last');
    $('ul', experience).addClass('span-24 last');

    $('h2', education).addClass('span-12 append-7');
    $('p', education).addClass('span-5 last');
    $('span', education).addClass('span-24 last');

    $('div', header).addClass('span-12 append-4');
    $('ul', header).addClass('span-8 last');
    $('p', header).addClass('span-23 append-1 last');

    $('div', footer).addClass('span-24 last');
    $('ul', footer).addClass('span-19');
    $('span', footer).addClass('col');
    $('p', footer).addClass('span-24 last');
  });
})(jQuery);

// Printing
(function ($) {
  $(document).ready(function() {
    if (false == __is_print()) {
      return;
    }

    $('#printer').addClass('hidden');
    $('nav').addClass('hidden');
    $('a:not(h1 > a)').each(function() {
      $(this).html($(this).attr('href'));
    });
    $('ul', $('footer')).addClass('span-24 last');

    window.print();
  });
})(jQuery);

