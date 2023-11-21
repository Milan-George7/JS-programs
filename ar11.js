// w.a.p find common numbers from given arrays

p=[10,11,12,20,30]
q=[11,20,21,30,31]

count=0
p.sort((a,b)=>a-b)
q.sort((a,b)=>a-b)
x=0
y=0

while(x<p.length && y<q.length){
    count++
    if(p[x]==q[y]){
        console.log(p[x]);
        x++
        y++
    }else if(p[x]<q[y]){
        x++
    }else{
        y++
    }
}
console.log(`Execution time: ${count}`);