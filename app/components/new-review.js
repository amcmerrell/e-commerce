import Ember from 'ember';

export default Ember.Component.extend({
  newReview: false,
  actions: {
    saveReview() {
      if(this.get('author') && this.get('rating') && this.get('content') && this.get('title')) {
        var params = {
          author: this.get('author'),
          title: this.get('title'),
          rating: parseFloat(this.get('rating')),
          content: this.get('content'),
          product: this.get('product')
        }
        if(params.rating<0 || params.rating>5){
          alert("Please rate between 1 and 5");
        }else{
          this.set('author', '');
          this.set('title', '');
          this.set('rating', '');
          this.set('content', '');
          this.set('newReview', false);
          this.sendAction('saveReview', params);
        }
      } else {
        alert("Please fill out all fields before submitting.");
      }
    },
    addNewReview() {
      this.set('newReview', true);
    }
  }
});
