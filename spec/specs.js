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

describe('lessNumber', function() {
  it("will decrease the user number by one down to zero", function() {
    expect(lessNumber(5)).to.eql("5 4 3 2 1 ");
  });
});
