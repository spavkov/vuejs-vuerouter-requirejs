define(["require","promise"], function(require,Q) {

    var resolve = function(dependency){

        return function(){
            console.log('resolving ' + dependency);
            if(!(dependency instanceof Array)){
                dependency = [dependency];
            }
            var deferred = Q.defer();
            require(dependency,function(res){
                deferred.resolve(res);
            });

            return deferred.promise;
        }
    };

    return resolve;

});