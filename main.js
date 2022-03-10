var n=8;
var b=[];
var a=[];
function oddNumbers(b) {

    for(i=0; i<=n; i++){
        b.push(i);
    }

    for(i=0; i<=n; i++){
        if(b[i]%2 !==0){
            a.push(b[i]);
        }
    }
    return a
}

console.log(oddNumbers(b));