describe("Testing the findItemsOver function", function(){
    it(" The function should return products that have quantity higher than the threshold",function(){
        assert.deepEqual(results, findItemsOver(itemList, 20));
    })

    it(" The function should return products that have quantity higher than the threshold",function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    })


    it(" The function should return products that have quantity higher than the threshold",function(){
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    })

    it(" The function should return products that have quantity higher than the threshold",function(){
        assert.deepEqual(results, findItemsOver(itemList, 10));
    })

});