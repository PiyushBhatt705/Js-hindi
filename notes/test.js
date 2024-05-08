const myArr = [1, 2, 3, 4, 5]
//Packed_SMI_Element

myArr.push(6.0)
//Packed_Dobule_Element

myArr.push('7')
// Packed_Element

myArr[10] = 11
//Holey_Element

console.log(myArr);
console.log(myArr.length);
console.log(myArr[9]);