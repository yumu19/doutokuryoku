$(function(){
    wagashiyanize();
});

function wagashiyanize(){
  $("*").each(function(i,elem) {
      if ($(elem).children().length == 0){
        var txt = $(elem).text();
        $(elem).text(
            txt.replace(/パン屋/g,'和菓子屋')
        );
      }
  });
}
