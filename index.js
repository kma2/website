$(document).ready(function() {
  // box shadow
  $('#whack-preview').hover(function() {
    $('#whack-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#whack-preview-img').removeClass('preview-image-selected');
  });

  $('#youtube-preview').hover(function() {
    $('#youtube-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#youtube-preview-img').removeClass('preview-image-selected');
  });

  $('#microsoft-preview').hover(function() {
    $('#microsoft-preview-img').addClass('preview-image-selected');
  }, function() {
    $('#microsoft-preview-img').removeClass('preview-image-selected');
  });

  // open project detail page
  $('#youtube-preview').click(function() {
    window.location = 'projects/youtube.html';
  });

  $('#microsoft-preview').click(function() {
    window.location = 'projects/microsoft.html';
  });

  // lazy image loading
  // [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  //   img.setAttribute('src', img.getAttribute('data-src'));
  //   img.onload = function() {
  //     img.removeAttribute('data-src');
  //   };
  // });
});
