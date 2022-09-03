//Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var yob=1998;
var age=2022-yob;

if(age>=13 && age<=19)
{
  console.log("Teenage");
}
else if(age>=20 && age<=29)
{
  console.log("Twenties");
} else {
  console.log("NA");
}

// Using terneray operator

/*age>=13 && age<=19 ? console.log("Teenage") :
  age>=20 && age<=29 ? console.log("Twenties") : console.log("NA");*/


// using switch case (Doubt)

/*switch (age) {
  case age : console.log("Teenage");
      break ;
  case age : console.log("Twenties");
      break ;
  default : console.log("NA");
*/

  
