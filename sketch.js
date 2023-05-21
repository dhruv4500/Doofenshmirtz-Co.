var home,matchInfo,merch,back,backimg;

function preload(){

  backimg = loadImage("Images/liveMatchBack.jpg")

}
/*
function setup(){
    createCanvas(windowWidth-0.1,windowHeight-20);

  home = new Home();
  home.align()
  getMatches().then(data => {
    home.matchInfoFeed(data);
  });

}*/

function setup() {
  createCanvas(windowWidth - 0.1, windowHeight - 20);

  home = new Home();
  getMatches().then(data => {
    home.matches = new Array(data.length).fill(null);
    home.align();
    home.matchInfoFeed(data);
  });
}



function draw(){

  background("white");
  if (back === 1){
    background(backimg)
  }
}

async function getMatches() {
  try {
    var response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e3b7c323-3cdc-4059-a5c6-610d053c9b42&offset=0");
    var responseJSON = await response.json();
    var matchesData = responseJSON.data;
    if(matchesData === undefined){
      var response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=8d42c63b-cf6c-4d4e-bb83-01ac6cad14ae&offset=0");
    var responseJSON = await response.json();
    var matchesData = responseJSON.data;
    }
    if(matchesData === undefined){
      var response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e3b7c323-3cdc-4059-a5c6-610d053c9b42&offset=0");
    var responseJSON = await response.json();
    var matchesData = responseJSON.data;
    }
    if(matchesData === undefined){
      var response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=74be8c6c-5ebb-48a0-ac66-bde629b5316a&offset=0");
    var responseJSON = await response.json();
    var matchesData = responseJSON.data;
    }
    return matchesData;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}
