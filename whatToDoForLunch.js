function whatToDoForLunch(hungry, avaliableTime) {
  if (!hungry) {
    console.log("Go back to work!");
  }
  else {
    console.log("Have lunch");
    if (avaliableTime < 20) {
      console.log("pick up a snack or grab something you have ready at home");
    }
    else if (avaliableTime > 20 && avaliableTime < 30) {
      console.log("you deserve a break and should take time to cook a tasty meal");
    }
    else if (avaliableTime > 30) {
      console.log("this is an intense program after all and you should probably reconsider");
    }
  }

}
whatToDoForLunch(false, 40);
whatToDoForLunch(true, 10);
whatToDoForLunch(true, 39);
whatToDoForLunch(true, 25);