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
  let min_1, min_2
  
  while (array_1.length != 0 && array_2.length != 0)
  {
    
    min_1 = findMinAndRemoveSorted(array_1)
    min_2 = findMinAndRemoveSorted(array_2)
    
    if (min_1 < min_2)
    {
      sorted.push(min_1)
    }
    else
    {
      sorted.push(min_2)
    }
  }
  
}

function mergeSort(array)
{
  
  
  
}