 $(document).ready(function(){
     $('.slider').slider();
     $('.slider').slider({
      height:820,
      indicators:false,
    });
     $('.parallax').parallax();
     $('.collapsible').collapsible();
     $('.modal').modal();

     $('.brand-logo').mouseenter(function () {
        $('#spinLogo').addClass('faa-spin animated');
      $(".brand-logo").mouseleave(function(){
        $("#spinLogo").removeClass('faa-spin animated');
    });

    });
  });

  $(function() {
    $('#sendMail').on('submit', function(e) {
          e.preventDefault();
          setTimeout(function() {
               window.location.reload();
          },0);
          $('#sendMail').trigger("reset");
          this.submit();
          alert("Mail successfully sent!");
    });
});
