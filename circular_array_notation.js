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
    var n = parseInt(n_temp[0]); //number of elements in the array
    var k = parseInt(n_temp[1]); //the amount of rotations
    var q = parseInt(n_temp[2]); //the amount of guesses
    a = readLine().split(' '); //elements found in the array
    a = a.map(Number);
    
    var mArray = [];
    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine()); //index of element that must be printed
        mArray.push(m);
    }
    
    for(var i = 0; i < k; i++){
          var popped = a.pop();
          var pushed = a.unshift(popped);
         
    }
    
    for(var j = 0; j < mArray.length; j++){
        console.log(a[mArray[j]]);
    }
    
    
      
    
        
       // console.log(a);  //[1,2]
        //console.log(popped);  //3
   
    //console.log(n_temp);
   // console.log(n);
  //  console.log(k);
  //  console.log(q);
 //   console.log(a);
  //  console.log(m);
}
