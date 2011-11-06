# What is this about?

Just a resume held in a HTML file. Hopes to become a template or a starter for
doing resume, just like the one for doing presentation
(http://slides.html5rocks.com/).

One particular objective of this stuff is to prevent user from doing the CSS
styling right inside the HTML. The layout of this stuff utilizes the grid
framework from Blueprint CSS. CSS classes are injected to HTML elements in
`js/scripts.js` "Content Layout" section. Other styles besides of layout are
defined in `css/style.css` following the HTML5 Boilerplate guidelines.

Another objective of this stuff is to try putting the technologies / tech-buzz
(which I just lazily call them tech. toys) that someone is familiar in into a
"toy cloud" (indeed something just like a tag cloud). In contrast to listing
them one by one, a "toy cloud" would clearly show the expertise.

If you would like to add your own section, just copy-n-paste any <section> in
the <article> block and start work on it :)

Sample - (http://mrkschan.github.com/html-resume/)


# Depends on...

* http://html5boilerplate.com/ - The starting kit of this stuff.
* http://www.blueprintcss.org/ - A css framework with easy-to-use grid.
* https://github.com/addywaddy/jquery.tagcloud.js -
  A Simple Tag Cloud Plugin for JQuery.
* http://www.position-absolute.com/articles/better-html-anchor-a-jquery-script-to-slide-the-scrollbar/ -
  A JQuery plugin for sliding to anchor.
* http://wiki.github.com/heygrady/transform/ -
  A JQuery plugin to handle 2D transform.


# Build step...

    $> cd html-resume/build/
    $> ant minify

    output available at: html-resume/publish/


# Copyright

This stuff is licensed with the Unlicense (http://unlicense.org/). You may find
a copy of the license in the LICENSE file.

html5boilerplate - Unlicense (a.k.a. public domain - http://unlicense.org/)  
For the licenses of the great works that html5boilerplate is composed of, please
refer to https://github.com/paulirish/html5-boilerplate/blob/master/README.md

blueprintcss - MIT License
(https://github.com/joshuaclayton/blueprint-css/blob/master/LICENSE)

jquery.tagcloud.js - MIT License
(https://github.com/addywaddy/jquery.tagcloud.js/blob/master/LICENSE)

jquery.anchor.js - by Cedric Dugas (http://www.position-absolute.com)

jquery.transform.js - by Grady Kuhnline, MIT or GPLv2
(https://github.com/heygrady/transform)


# Todo

- to be responsive (media quires)
