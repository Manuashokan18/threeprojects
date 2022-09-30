let n = parseInt(prompt(" Enter a number"));
let f=1,temp;
temp = n;
for(let i = 1; i <= n; i++) {
    f=f*i;
}
document.write("<b> Factorial of </b>  " + temp + " = " + f);