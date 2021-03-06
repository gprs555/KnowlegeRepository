var request = require('request');

var url = "https://my988892.c4c.saphybriscloud.cn/sap/c4c/odata/cust/v1/zjerrysalesorder";

var getTokenOptions = {
        url: url,
        method: "GET",
        json:true,
        headers: {
            "content-type": "application/json",
            'Authorization': "Basic ABCDE0pFUlJZMTpTYXB0ZXN0MQ==",
            "x-csrf-token" :"fetch"
        }
};

function getToken() {
  return new Promise(function(resolve,reject){
      var requestC = request.defaults({jar: true});
      console.log("Step1: get csrf token via url: " + url );

      requestC(getTokenOptions,function(error,response,body){
       var csrfToken = response.headers['x-csrf-token'];
       if(!csrfToken){
          reject({message:"token fetch error"});
          return;
       }
       console.log("Step1: csrf token got: " + csrfToken);
       resolve(csrfToken);
      }); 
     });
}

function createSalesOrder(token, oPostData){

	return new Promise(function(resolve, reject){
		var requestC = request.defaults({jar: true});
        var createOptions = {
              url: "https://my988892.c4c.saphybriscloud.cn/sap/c4c/odata/cust/v1/zjerrysalesorder/CustomerQuoteCollection",
              method: "POST",
              json:true,
              headers: {
                  "content-type": "application/json",
                  'x-csrf-token': token
              },
              body:oPostData
        };
        requestC(createOptions,function(error,response,data){
            if(error){
                reject(error.message);
            }else {
               resolve(data);
            }
        });
	});
}


getToken().then(function(token) {

  var payload = {
    "Name": "Jerry Test 2019-1-12 19:52PM",
    "TypeCode": "2059",
    "BuyerID":"Jerry open ID",
    "PartyID":"60102",
    "CustomerQuoteText":[{
      "Text": "test comment by Jerry Wang",
      "TypeCode": "10024"
    }],
    "CustomerQuoteItem":[{
      "ProductID": "1042416"
    }],
    "CustomerQuoteItemProposal":[{
      "ProductUUID": "00163E72-09C6-1EE8-BBDC-AC5F0CB0D795",
      "Quantity": "1",
      "unitCode": "EA"
    }]
  };
  createSalesOrder(token, payload).then(function(oData){
    console.log("created Sales Order by OData: " + oData.d.results.ID);
  });
});



