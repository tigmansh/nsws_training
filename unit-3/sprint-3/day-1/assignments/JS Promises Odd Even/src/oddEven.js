function getData(data) {
    return new Promise(function (resolve, reject){

            if(isNaN(data)){
              reject("error");
            } 
        
            else if(data%2==0){
                setTimeout(()=>{
                    resolve("even");            
                    
                }, 4000)
            }
            else{
                setTimeout(()=>{
                    resolve("odd");            
                    
                }, 3000)
            }
    });
}

export default getData
