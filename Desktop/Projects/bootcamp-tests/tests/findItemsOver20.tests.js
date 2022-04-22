describe("Testing the findItemsOver20 function", function(){
    it("The function should return all the products that have a quantity higher than 20.", function(){
        assert.deepEqual(results, findItemsOver20(itemList));
    })

    it("The function should return all the products that have a quantity higher than 20.", function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
    })

    it("The function should return all the products that have a quantity higher than 20.", function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
    })

});