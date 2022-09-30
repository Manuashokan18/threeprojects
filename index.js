const num = parseInt(prompt("Enter the limit: "));
let a = 0, b = 1, c ;
document.write("Fibonacci series : <br>");
for(let i =  0;i < num ;i++){
    document.write(a );
    document.write("<br>");
    c = a + b;
    a = b;
    b =c;
}