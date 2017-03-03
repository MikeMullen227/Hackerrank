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
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);  //left side of house
    var t = parseInt(s_temp[1]);  //right side of house
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]); //position of apple tree (left side)
    var b = parseInt(a_temp[1]); //position of orange tree (right side)
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]); //amount of apples
    var n = parseInt(m_temp[1]); //amount of oranges
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    
     var countApples = 0;
     var countOranges = 0;
     for(var i = 0; i < apple.length; i++){
        if(a + apple[i] >= s && a + apple[i] <= t){
            countApples++;   
        }
     }
     for(var i = 0; i < orange.length; i++){
        if(b + orange[i] >= s && b + orange[i] <= t){
            countOranges++;   
        }
     }
        console.log(countApples);
        console.log(countOranges);
}
