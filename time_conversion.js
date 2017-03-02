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
function timeConversion(time) {
        var timeArray = time.split('');
    
    if (timeArray[0] === '1' && timeArray[1] === '2' && timeArray[8] === 'A') {             
            timeArray.splice(0, 2, '0', '0');
    } else if (!(timeArray[0] === '1' && timeArray[1] === '2') && timeArray[8] === 'P') {
            var stringToNum1 = parseInt(timeArray[0]) + 1;
            var stringToNum2 = parseInt(timeArray[1]) + 2;
            timeArray.splice(0, 2, stringToNum1, stringToNum2);
    }
    timeArray.splice(8, 2);
    console.log(timeArray.join(''));
}
 
function main() {
     var time = readLine();
     timeConversion(time);
}