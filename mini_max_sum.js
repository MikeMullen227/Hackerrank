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
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);

    var firstSum = a + b + c + d;
    var secondSum = a + b + c + e;
    var thirdSum = a + b + d + e;
    var fourthSum = a + c + d + e;
    var fifthSum = b + c + d + e;
    var totals = [];

      totals.push(firstSum, secondSum, thirdSum, fourthSum, fifthSum); 
      totals = totals.sort();
    
    var min = totals.shift();
    var max = totals.pop();
    console.log(min + ' ' + max);
}
