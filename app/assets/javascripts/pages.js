// $(function() {
//   $(".dial").knob();
// });
//
// $(".dial").knob({
//     'change' : function (v) { console.log(v); }
// });
$(function() {
 $(".dial").knob({
   'release' : function (v) {
     var rojo =  $('#red').val(),
         verde =  $('#green').val(),
         azul =  $('#blue').val()
   $('.square').css({"background-color":"rgb("+rojo+", "+verde+", "+azul+")"});
   $('#value_color').text('rgb(' + $('#red').val() + ', ' + $('#green').val() + ', ' + $('#blue').val() + ')');
   }
 });
});
