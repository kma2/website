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


// microsoft
$("#project1").on('click', function(){
     window.location = "views/microsoft.html";
});

// microsoft
$("#project2").on('click', function(){
     window.location = "views/uberexplore.html";
});

// microsoft
$("#project3").on('click', function(){
     window.location = "views/wellesleyhacks.html";
});

// microsoft
$("#project4").on('click', function(){
     window.location = "views/print.html";
});

// photography
$("#project5").on('click', function(){
     window.location = "views/photography.html";
});
