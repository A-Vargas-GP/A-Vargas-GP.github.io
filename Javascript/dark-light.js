$(document).ready(function() {
  $('body').addClass('light-mode');

  $('#dark-light-event').change(
    function() {
      if ($(this).prop('checked')) {
        $('body').addClass('light-mode');
        $('body').removeClass('dark-mode');
        // $('#console-event').html('Toggle: ' + $(this).prop('checked'))
      }
      else {
        $('body').addClass('dark-mode');
        $('body').removeClass('light-mode');
        // $('#console-event').html('Toggle: ' + $(this).prop('checked'))
      }
    })
});

//  Alternative to above:
// -------------------------------------------------------------------------
// $(document).ready(function() {
//   $('#dark-light-event').change(
//     function() {
//       if ($(this).prop('checked')) {
//         $('body').css(
//           {
//             "background-color": "white", 
//             "color": "black"
//           });
//         // $('#console-event').html('Toggle: ' + $(this).prop('checked'))
//       }
//       else {
//         $('body').css(
//           {
//             "background-color": "black", 
//             "color": "white"
//           });
//         // $('#console-event').html('Toggle: ' + $(this).prop('checked'))
//       }
//     })
// });