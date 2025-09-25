// Controll statements:

// 1. Conditional Stmts
// if

// let age = 15

// if(age > 18){
//     console.log("Eligible for voting");
// }

// if else

// let age = 15;

// if (age > 18) {
//   console.log("Eligible for voting");
// }else{
//     console.log("Not Eligible");
// }

// if else if

// let age = 15;

// if (age > 18) {
// console.log("Eligible for voting");
// } else if(age == 18){
//     console.log("Partially eligible");
// } else {
// console.log("Not Eligible");
// }

// switch cse

// let day = 12

// switch (day) {
//   case 1:
//     console.log("It's a Monday");
//     break;
//   case 2:
//     console.log("It's a Tuesday");
//     break;
//   case 3:
//     console.log("It's a Wednesday");
//     break;
//   case 4:
//     console.log("It's a Thursday");
//     break;
//   case 5:
//     console.log("It's a Friday");
//     break;
//   case 6:
//     if(day > 3){
//         console.log("It's a Saturday");
//     }
//     break;
//   default:
//     console.log("Happy weekend");
//     break;
// }

// 2. Looping Stmts
// for loop

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// while loop

// let i = 1;

// while(i <= 10){
//     console.log(i);
//     i++;
// }

// do while loop

// let i = 1;

// do {
// console.log(i);
// i++;
// } while (i <= 10);

// 3. Jumping Stmts
// break
// continue

let i = 0;

while (i <= 10) {
  i++;
  if (i == 3) {
    continue;
  }
  console.log(i);
}
