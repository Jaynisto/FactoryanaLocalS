describe("Testing the mostProfitableDepartment function", function(){
    it("The function should return the departments that are the most profitable, which is the outdoor department in this case", function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    })


    it("The function should return the departments that are the most profitable, which is the electronics department in this case", function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    })


    it("The function should return the departments that are the most profitable, which is the movies department in this case", function(){
        assert.equal('movies', mostProfitableDepartment(salesData3), "Most profitable department is 'movies' for dataset 3");
    })

    it("The function should return the departments that are the most profitable, which is the cosmetics department in this case", function(){
        assert.equal('cosmetics', mostProfitableDepartment(salesData4), "Most profitable department is 'cosmetics' for dataset 2");
    })
});

