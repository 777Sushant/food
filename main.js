// Smooth scrolling for anchor links
$('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  // Form submission
  $('form').on('submit', function (event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('textarea').val();
    
    // TODO: Add your form submission logic here
    
    // Reset form fields
    $('#name').val('');
    $('#email').val('');
    $('textarea').val('');
    
    // Show success message
    alert('Message sent successfully!');
  });
  