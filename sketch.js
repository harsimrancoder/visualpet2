var dog,dogImg,happydogImg;
var database;
var food,foodstock
var feedThePet,addFood,lastFed,fedTime,foodObj

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  database= firebase.database();
foodObj=new Food();
  foodstock = database.ref("food")
  foodstock.on("value",readstock)

  feed=cresteButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  fedTime=database.ref('FeedTime')
frdTime.on("value",function(data){
  lastFed=data.val();
});
}


function draw() {  
background("yellow")
foodObj.display();

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("last Feed :"+ lastFed%12+"PM",350,30);
}else if (lastFed==0){
  text("Last Feed :12 AM",350,30);
}else{
  text("Last Feed : "+lastFed+"AM",350,30);
}


 

}

function readStock(){
foodS= data.val();
foodObj.updateFoodStock(foodS)
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    feedTime:hour()
  })
}














