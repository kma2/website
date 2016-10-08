// hide extra bio information
$('.read-more-content').addClass('hide');
$('.read-less-content').addClass('hide');

// read more toggle
$('.read-more-button').on('click', function() {
  $(this).next('.read-more-content').toggleClass('hide');
  $(this).toggleClass('hide'); // hides link
});

// read less toggle
$('.read-less-button').on('click', function() {
    $('.read-more-content').toggleClass('hide');
    $('.read-more-button').toggleClass('hide'); // show read more toggle
});

// back button to return to index
$('.back-button').on('click', function() {
    window.location = "../index.html";
});

// photography
$("#project5").on('click', function(){
     window.location = "views/photography.html";
});
