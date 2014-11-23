(function(window, document, $) {
  // Support ?print=1
  $(document).ready(function() {
    if (window.location.search.indexOf('print=1') === -1) {
      return;
    }

    $('body').addClass('print');
  });
}(window, document, jQuery));
