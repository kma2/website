$( document ).ready(function() {
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
});
