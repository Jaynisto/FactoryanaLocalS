describe("Testing the yearsAgo function", function(){
    it("The function should return how many years ago from the current year", function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))
    })

    it("The function should return how many years ago from the current year", function(){
        assert.equal((new Date().getFullYear() - 1960), yearsAgo(1960))
    })

    it("The function should return how many years ago from the current year", function(){
        assert.equal((new Date().getFullYear() - 200), yearsAgo(200))
    })

    it("The function should return how many years ago from the current year", function(){
        assert.equal((new Date().getFullYear() - 20), yearsAgo(20))
    })
});