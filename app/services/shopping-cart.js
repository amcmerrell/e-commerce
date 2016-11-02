import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  add(item,items){
    //if includes dont add
    var doesInclude = false;
    var quantity = 0;
    for(var i = 0;i<items.length;i++){
    	if(items[i].includes(item)){
        quantity = items[i][1];
        console.log(quantity);
      	doesInclude = true;
        quantity++;
        this.set("items"[i][1], quantity);
       }
     }
     if(!doesInclude){
       this.get('items').push([item,1]);
      //  this.get('items').pushObject(item);
     }

    // this.cost(this.get('items'));
  },
  remove(item){
    //if includes dont remove but decrement
    this.get('items').removeObject(item);
    this.cost(this.get('items'));
  },
  empty(){
    this.get('items').clear();
  },
  removeAllOfOneType(item,items){
    for(var i = 0; i <items.length; i++){
    	if(items.includes(item)){
      	var index = items.indexOf(item);
        items.splice(index,1);
      }
    }
  },
  //maybe a checker for if cart is empty
  cost(items){
    var tempTotal = 0;
    if(items.length>0){
      for (var i = 0; i < items.length; i++) {
      tempTotal+=items[i].data.price;
      }
    }
    this.set("total",tempTotal);
  }
});
