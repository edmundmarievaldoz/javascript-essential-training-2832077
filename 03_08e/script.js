/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15);

console.log("Left after:", backpack.strapLength.left);

console.log("this is the color of the backpack before:", backpack.color);

backpack.changeColor("red");

console.log("this is the new color of the backpack: ", backpack.color);
