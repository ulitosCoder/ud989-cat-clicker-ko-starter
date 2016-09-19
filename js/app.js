var initialCats= 
    [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            showAdmin : false,
            nicknames: ['mittens','fluffy']
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            showAdmin : false,
            nicknames: ['Tyger']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            showAdmin : false,
            nicknames: null
        },
        {
            clickCount : 0,
            name : 'Shadowfalse',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            showAdmin : false,
            nicknames: null
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            showAdmin : false,
            nicknames: null
        }
    ];




Cat = function(data){

    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgSrc);
    
    this.nicknames = ko.observableArray(data.nicknames);

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
    this.catList = ko.observableArray([]);
    this.currentCat = null;

    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function(){
        self.currentCat().incrementCounter();
    };

    this.setCurrentCat = function(cat){
        self.currentCat( cat );
        //alert(self.currentCat().nicknames);
    };
};


ko.applyBindings(new ViewModel());