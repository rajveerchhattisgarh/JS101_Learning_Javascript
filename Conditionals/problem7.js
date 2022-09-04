//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

var user_name="raj123veer";
var pass_word="raj@123";

var in_user="raj123veer";
var in_pass="raj@123";

if(user_name==in_user)
{
  if(pass_word==in_pass)
  {
    console.log("Login succesfull");
  }
  else{console.log("Incoreect password")}
}
else
{
  console.log("wrong username");
}