const iconObj = {
  activity: "http://i.imgur.com/WbMOfMl.png",
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
};
const markerBuilder = (type, coord) => {
  const pin = document.createElement("div");
  pin.style.width = "35px";
  pin.style.height = "35px";
  pin.style.backgroundImage = `url(${iconObj[type]})`;
  return [pin, coord];
};
module.exports = markerBuilder;
