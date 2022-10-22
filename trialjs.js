$(document).ready(
    function () {
      $('#button').on('click',
        function () {
          var toAdd = $('input[name=addItem]').val();
      
            $('ol')
              .append('<li class="remove">' + toAdd + ' <button class="btn"> remove</button>' + '</li>')
              .css({
                'text-transform': 'capitalize'
              });
            $(document).on('click','.remove', function () {
              $(this).toggleClass('strike').fadeOut('slow');
            });
          }
        );
      $("input[name=addItem]").keyup(function (event) {
        if (event.keyCode == 13) {
          $("#button").click();
        }
      });
      $('input').focus(function () {
        $(this).val('');
      });
      // to sort the ordered list
      $('ol').sortable();
    }
  );