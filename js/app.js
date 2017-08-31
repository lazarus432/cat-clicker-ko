var initial_cats = [
  {
      clickCount : 0,
      name : 'Henry',
      imgSrc : 'img/cat1.jpg',
      nicknames: "KC's Bae"
  },
  {
      clickCount : 0,
      name : 'Bajheera',
      imgSrc : 'img/cat2.jpg',
      nicknames: 'Swoljer'
  },
  {
      clickCount : 0,
      name : 'Kaan',
      imgSrc : 'img/cat3.jpg',
      nicknames: 'Tiger'
  },
  {
      clickCount : 0,
      name : 'Claw',
      imgSrc : 'img/cat4.jpg',
      nicknames: 'Scratch'
  },
  {
      clickCount : 0,
      name : 'Mittens',
      imgSrc : 'img/cat5.jpg',
      nicknames: 'Leon'
  }
]


var Cat = function(data) {
  var self = this;
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  self.level = ko.observable('Baby G');
  this.imgSrc = ko.observable(data.imgSrc);
  this.nickname = ko.observable(data.nicknames);


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



var ViewModel = function() {
  var self = this;

  this.cat_list = ko.observableArray([]);

  initial_cats.forEach(function(cat_item) {
    self.cat_list.push( new Cat(cat_item) );
  });


  this.currentCat = ko.observable(this.cat_list()[0] );

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.set_cat = function(selected) {
    self.currentCat(selected);
  };

};
ko.applyBindings(new ViewModel())
