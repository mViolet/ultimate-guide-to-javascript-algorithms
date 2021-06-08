/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

//presuming the array is not sorted

function whereIBelong(arr, num) {
   const arrCopy = [...arr]
   arrCopy.sort((a,b) => a-b) //array is sorted, arr is unaffected
   let counter = 0

   for (let i=0; i < arrCopy.length; i++){
      if (arrCopy[i] < num) counter++
      if (arrCopy[i] > num) break //break to prevent going through whole array
   }

   return counter
}



module.exports = whereIBelong