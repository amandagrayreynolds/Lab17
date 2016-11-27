
var app = angular.module("webWork",[]);

app.controller("webSectionCtrl",function($scope){
  
  //Create an array of 3 objects that describe me for my home page
  
  $scope.sectionInfo = [
  {
    headline: "Enter the Void",
    description: "A seating reservation appbuilt with JQuery and Javscript",
    image: "cover.png",
    url: "http://amandagrayreynolds.github.io"
  },
  {
    headline: "Trump",
    description: "A Donald Trump quote generator built with Angular.JS",
    image: "donald-trump.jpg",
    url: "http://github.com/amandagrayreynolds/TrumpSpouter"
  },
    {
    headline: "Magic 8 Ball",
    description: "A fortune teller built with Angular.JS",
    image: "magicballcover.png",
    url: "https://github.com/amandagrayreynolds/Magic8BallApp"
  },

];
  
});

app.directive("webSectionInfo", function(){
  return{
    restrict: "E",
    templateUrl: "webwork.html"
  };
});
