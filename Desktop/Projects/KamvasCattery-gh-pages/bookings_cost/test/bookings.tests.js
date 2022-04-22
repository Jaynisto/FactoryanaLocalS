var booking = {
    check_in_day: 'Monday',
    duration: 3,
    cat_name : 'Snowy'
  };

  var booking2 = {
    check_in_day: 'Wednesday',
    duration: 3,
    cat_name : 'Snowy'
  };

  var booking3 = {
    check_in_day: 'Friday',
    duration: 3,
    cat_name : 'Snowy'
  };


describe("Testing the booking fuction", function(){
    it("The function should return R135 for Monday booking", function(){
        assert.equal('R135', bookingCost(booking))
    })


    it("The function should return R101.25 for Wednesday booking", function(){
        assert.equal('R101.25', bookingCost(booking2))
    })


    it("The function should return R114.75 for Friday booking", function(){
        assert.equal('R114.75', bookingCost(booking3))
    })
});
