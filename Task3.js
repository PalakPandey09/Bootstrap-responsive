$(document).ready(function() {
    // Handle image clicks to show modals
    $('.card-custom img').click(function() {
      var modalId = $(this).data('target');
      $(modalId).modal('show');
    });
  
    // Handle form submission
    $('#contact-form').submit(function(event) {
      event.preventDefault();
      var name = $('#inputName').val();
      var email = $('#inputEmail').val();
      var message = $('#inputMessage').val();
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      alert('Form submitted successfully!');
      $(this).trigger('reset');
    });
  });
  