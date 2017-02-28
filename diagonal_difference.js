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
function diagonals(a) {
    var first_diagonals = 0;
    var second_diagonals = 0;
    for(var i = 0; i < a.length; i++){
          first_diagonals += (a[i][i]);
          second_diagonals += (a[i][(a.length - 1) - i]);
    }
     console.log(Math.abs(first_diagonals - second_diagonals));
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    diagonals(a);
}

