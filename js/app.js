var ViewModel = function() {
  var self = this;
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Henry');
  self.level = ko.observable('Baby G');
  this.imgSrc = ko.observable('img/cat1.jpg');


  self.level = ko.computed(function(){
    var clicks = self.clickCount();
    var level = self.level();
    if (clicks < 10) {
      level = "Baby G";
      return level;
    }
    if (clicks < 20) {
      level = "Young G";
      return level;
    }
    if (clicks < 30) {
      level = "Real G";
      return level;
    }
    if (clicks < 40) {
      level = "OG";
      return level;
    }
  });
}

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

ko.applyBindings(new ViewModel())