var promise = new Promise(function(resolve, reject) {
	resolve('happy to hear');
})

promise
	.then(function(successMessage) {
	
		console.log(successMessage);
	}, function(errorMessage) {
		console.log(errorMessage);
})


var promise = new Promise(function(resolve, reject) {
        reject('Promise Rejected')
})
    
promise
        .then(function(successMessage) {
            console.log(successMessage);
        })
        .catch(function(errorMessage) {
       
            console.log(errorMessage);
});
    


new Promise((resolve, reject) => {
                throw new Error("error");
              })
                .finally(() => alert("Promise ready"))
.catch(err => alert(err)); 

