process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);

    /*
    for(var i = 1; i < 3; i++)  {
    var factors = a.map(function(x) {
        console.log(x);
   return x / i;
});
    }
    
    console.log(factors);
    
    */
    
    function findFactor(){
        for(var i = 0; i < n; i++){
            for(var j = 0; j < n; j++){
                if(Number.isInteger(a[i]/a[j]) === false){
                    a.splice(i, 1);
                }
            }
        }
    
        return (a.pop());
    }
    
    
    function divideByFindFactor(x){
        finalArray = [];
        factorArray = [];
        counter = 0;
        for(var i = 0; i <= m; i++){
            for(var j = 1; j <= b[i]; j++){
                if(Number.isInteger(b[i] / j) && b[i] / j >= x){
                  factorArray.push(b[i] / j)
                }
            }
        }
            factorArray.sort();
            console.log(factorArray);
             for(var k = 0; k < factorArray.length - 1; k++){
                 if(factorArray[k + 1] === factorArray[k]){
                     finalArray.push(factorArray[k]);
                      
                  }
             }
            
        
        console.log(finalArray);
    }
    
divideByFindFactor(findFactor());
}
