let l1=[9,9,9,9,9,9,9]
let l2=[9,9,9,9];

const AddTwoNumbers = (l1,l2) => {

 let num1 = parseInt(l1.slice().reverse().join(''));
    let num2 = parseInt(l2.slice().reverse().join(''));

    return (num1 + num2).toString().split('').map(Number).reverse();
}

console.log(AddTwoNumbers(l1,l2));