import Ember from "ember";
/* global $ */

export default Ember.Mixin.create({
  buffer: 500,
  bindToScrolling: function() {
    var view = this;
    $(window).bind("scroll", function() {
      view.didScroll();
    });
  }.on("didInsertElement"),

  unbindToScrolling: function() {
    $(window).unbind("scroll");
  }.on("willDestroyElement"),

  didScroll: function() {
    if(this.isScrolledToBottom()) {
      this.get("controller").send("more");
    }
  },

  isScrolledToBottom: function() {
    var distanceToTop = $(document).height() - $(window).height();
    var top = $(document).scrollTop();

    return top > distanceToTop - this.get("buffer");
  }
});
