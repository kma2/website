// hide extra bio information
$('.read-more-content').addClass('hide');
$('.read-less-content').addClass('hide');

// read more toggle
$('.read-more-toggle').on('click', function() {
  $(this).next('.read-more-content').toggleClass('hide');
  $(this).toggleClass('hide'); // hides link
});

// read less toggle
$('.read-less-toggle').on('click', function() {
    $('.read-more-content').toggleClass('hide');
    $('.read-more-toggle').toggleClass('hide'); // show read more toggle
});
