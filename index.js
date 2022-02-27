$(document).ready(function(){
   $('#lighton').hide()
    });
    

        $("#btn-on").click(function(){
          $('#lightof').hide();
          $('#lighton').show();
        });


        $("#btn").click(function(){
            $('#lightof').show();
            $('#lighton').hide();
          });


          $(document).ready(function(){
            $('#slide').hide('5000').show('5000')
             });