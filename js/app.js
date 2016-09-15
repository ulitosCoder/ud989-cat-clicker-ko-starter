var aModel= {

};




Cat = function(data){
    
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Taby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');
    
    this.nicknames = ko.observableArray(
        [{nickname:'mittens'},
        {nickname:'fluffy'}]
        );

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1 ) ;
    };

    this.catLevel = ko.computed(function(){

        if(this.clickCount()<10){
            return "baby";
        } 
        else if(this.clickCount()<15){
            return "Infant";
        }
        else if(this.clickCount()<20){
            return "Young";
        }
        else if(this.clickCount()<25){
            return "adult";
        }

        return "Old";
    }, this);  
    
};

ViewModel= function(){
    var self = this;

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function(){
        self.currentCat().incrementCounter();
    };
};


ko.applyBindings(new ViewModel());