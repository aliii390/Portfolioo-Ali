(function($) {
    
    var T, 
    write = {
      settings: {
        letters: $('.text'),
      },
      init: function() {
        T = this.settings;
          var self=this;
          
  
        this.putIntab();
      },
      putIntab: function(){
        for(var i=0;i<T.letters.length;i++){
  
          var tableau= $.trim(T.letters[i].innerHTML).split(/(?=[^>]*(?:<|$))/);
          //tableau=["te","st"];
          //efface le texte existant
          T.letters[i].innerText=" ";
          //affiche le nouveau texte caractere par caractère
          this.afficheDelay(i,tableau);
         }
      },
      afficheDelay: function(champ,texte){
          var y = 0;
        var self = this;
        //parcours le tableau dans un interval donné en 2nd param
        var affiche = setInterval(function(){
          //ajoute dans le texte d'id champ, la lettre y du tableau
          var lettre = texte[y];
          $("<span>"+lettre+"<span>").appendTo(self.settings.letters[champ]);
          y++;
          if (y==texte.length){
            clearInterval(affiche)
          }
        },60);//temps entre chaque caracteres
      },
    };
    write.init();
  })(jQuery);




  


  
