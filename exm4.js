function MtoKm(M_array) {
    const j=1.609344
const K_array= M_array.map(mile=>mile*j)
const dkm=K_array.reduce((sum,km)=>sum+km,0)
return dkm
}
const M_array=[10,10]//10+10=20 miles
const result=MtoKm(M_array)
console.log(`total distance in km: ${result}`);