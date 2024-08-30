let numNeighbours = prompt(
  "How many neighbor countries does your country have?"
);
if (numNeighbours <= 1) console.log("More than 1 border");
else if (numNeighbours > 1) console.log("numNeighbours");
else console.log("No borders");
