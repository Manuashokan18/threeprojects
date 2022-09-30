let n = parseInt(prompt(" Enter a number:  "));
let s = 0,temp,r =0;
temp = n;

while(n > 0){       
    r = n % 10;
    s = ( s * 10 ) + r;
    n = parseInt(n / 10) ;

    
}
if( temp == s) {

    document.write("Pallindrome Number:");

}
else {
    document.write("not Pallindrome Number:");
}