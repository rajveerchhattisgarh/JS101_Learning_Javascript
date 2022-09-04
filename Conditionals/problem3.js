//if the total bill of a person is more than or equal to discount price print then give him a discount of 10% and print the new bill otherwise print the toatla bill.

var totalbill=750;
var discount=699;

if (totalbill>=discount)
{
  let newBill=totalbill-(totalbill*0.10);
  console.log(newBill);
}
else
{
  console.log(totalbill);
}