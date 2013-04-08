BEM.DOM.decl('b-rating', { 
  onSetMod : {
    'js' : function() {

      begin_rating = this.params.rating;
      var star_widht = begin_rating*20 ;
      this.elem('votes').width(star_widht);

      this.bindTo('hover', function() {
        this.elem('votes').toggle();
        this.elem('hover').toggle();
        this.elem('info').toggleClass('active');
      }, function() {
        this.elem('votes').toggle();
        this.elem('hover').toggle();
        this.elem('info').toggleClass('active');
      });

      
      this.bindTo('mousemove', function(e){
        var offset = e.data.domElem.offset();
        var widht_votes = e.pageX - offset.left;
        if (widht_votes == 0) widht_votes = 1 ;
        //if (widht_votes > 5) widht_votes = 5 ;
        user_votes = Math.ceil(widht_votes/20);  
        this.elem('info').html('Ваша оценка <b>' + user_votes + '</b>');
        this.elem('hover').width(user_votes*20);

      });

      this.bindTo('click', function(e){
        this.elem('votes').width(user_votes*20).show();
        
        if (this.params.alert){
          this.elem('info').hide();
          alert('Ваша оценка ' + user_votes);
        }else{
          this.elem('info').html('Ваша оценка <b>' + user_votes + '</b>');  
        }
        this.elem('hover').hide();
        this.elem('info').fadeOut(3000, 'linear');
        e.data.domElem.unbind();
      });

    }
  }
});
