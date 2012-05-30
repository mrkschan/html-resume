/* Author:
- KS Chan (mrkschan@gmail.com)
*/

function __is_print() {
  var search = window.location.search;
  return (search.indexOf('format=print') > -1);
}

// Gear Table
(function($) {
  $(document).ready(function() {
    var gears = $('#gears'),
        container = $('#geartable'),
        levels = $('h2', gears),
        items = $('ul', gears),
        min_size = 12, min_size_def = $(container).attr('data-min-font-size'),
        max_size = 20, max_size_def = $(container).attr('data-max-font-size'),
        i = 0, j = 0, level, item, size, size_delta;

    items.addClass('horizontal');

    if (container.length < 1) {
      // skip if no #geartable div
      return;
    }

    if (min_size_def) {
      min_size = parseInt(min_size_def);
    }
    if (max_size_def) {
      max_size = parseInt(max_size_def);
    }

    size_delta = (max_size - min_size) / levels.length;

    size = max_size;
    for (i = 0; i < levels.length; i += 1) {
      level = levels[i];
      item = items[j];
      $(level).addClass('span-7');
      $(item).addClass('span-17 last')
             .attr('style', 'font-size:' + size + 'px');
      container.append(level)
               .append(item)
               .append($('<div />', {'class': 'clearfix'}));

      j += 1;
      size -= size_delta;
    }
  });
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

