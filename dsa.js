//  function fun(n){
//      if(n>0){
//          fun(n-1)
//          console.log(n)
//          fun(n-1)
//      }
//  }
//  fun(3)

//  function fun(a, b)
// {
   
// if (b == 0)
// return 0;
// if (b % 2 == 0)
//  return fun(a + a, Math.floor(b/2));

// return fun(a + a, Math.floor(b/2)) + a;
// }
// console.log(fun(3,4))

function fun(count)
{
   if(count < 3)
{
fun(fun(fun(++count)));
}
return count;
}
fun(1)
