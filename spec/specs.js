describe('bottleAmount', function() {
  it("will take a number and output that number", function() {
    expect(bottleAmount(5)).to.eql(5);
  });
});

describe('completeSentence', function() {
  it("will take user input to complete the sentence", function() {
    expect(completeSentence(20)).to.eql("20 bottles of beer on the wall.");
  });
});

// describe('lessNumber', function() {
//   it("will decrease the user number by one down to zero with sentences", function() {
//     expect(lessNumber(6)).to.eql("Take one down and pass it around, 1 bottles of beer on the wall.");
//   });
// });

describe('bottleCount', function() {
  it("will decrease the user number by one down to zero with sentences", function() {
    expect(bottleCount(3)).to.eql("3 bottles of beer on the wall, 3 bottles of beer.  Take one down, pass it around, 2 bottles of beer on the wall.  2 bottles of beer on the wall, 2 bottles of beer.  Take one down, pass it around, 1 bottle of beer on the wall.  1 bottle of beer on the wall, 1 bottle of beer.  Take one down, pass it around, 0 bottles of beer on the wall.  No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});
