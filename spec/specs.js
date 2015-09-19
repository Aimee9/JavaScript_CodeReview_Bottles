describe('bottleCount', function() {
  it("will decrease the user number by one down to zero with sentences", function() {
    expect(bottleCount(3)).to.eql("3 bottles of beer on the wall, 3 bottles of beer.  Take one down, pass it around, 2 bottles of beer on the wall.  2 bottles of beer on the wall, 2 bottles of beer.  Take one down, pass it around, 1 bottle of beer on the wall.  1 bottle of beer on the wall, 1 bottle of beer.  Take one down, pass it around, 0 bottles of beer on the wall.  No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});
