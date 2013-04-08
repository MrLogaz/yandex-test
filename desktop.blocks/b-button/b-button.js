BEM.DOM.decl('b-button', { 
  onSetMod : {
    'js' : function() {

      if (this.params.alert){
        this.bindTo('click', function(){
          alert(this.params.alert)
        });  
      }

    }
  }
});
