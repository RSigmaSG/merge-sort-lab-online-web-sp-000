function findMinAndRemoveSorted(array)
{
  let min = array[0];
  let minIndex = 0
  
  for (var i = 1; i < array.length ; i++)
  {
    if (min > array[i])
    {
      
      min = array[i];
      minIndex = i
      
    }
    
  }
  
  array.splice(minIndex, 1)
  return min
}

function merge(array_1, array_2)
{
  
  let sorted = []
  let min_1, min_2, currMax
  
  while (array_1.length != 0 && array_2.length != 0)
  {
    
    min_1 = findMinAndRemoveSorted(array_1)
    min_2 = findMinAndRemoveSorted(array_2)
    
    addElementInOrder(sorted, min_1, min_2)
  }
  return sorted.concat(array_1).concat(array_2)
}

function mergeSort(array)
{
  
  
  
}

function addElementInOrder(array, input_1, input_2)
{

  if(lastElement > input_1)
  {
    switchAdd(array, input_1)
    if 
  }
  
}

function switchAdd(array, input)
{
  
  let temp = array[array.length-1];
  array[array.length-1] = input
  array.push(temp)
  
}

function lastElement(array)
{
  
  return array[array.length-1];
  
}