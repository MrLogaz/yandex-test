BEM.DOM.decl('b-browser', { 
  onSetMod : {
    'js' : function() {
      this.elem('load').load(function(e){
        $(e.currentTarget).show();
        $(this).siblings('.b-browser__text').hide();
      });
    }
  }
});
