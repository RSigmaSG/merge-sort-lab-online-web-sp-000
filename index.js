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
    
    if (min_1 < min_2)
    {
      sorted.push(min_1)
      if (currmax < min_1)
      {
        replace(sorted, array.length-1, array.length -2)
      }
    }
    else
    {
      
    }
  }
  return sorted.concat(array_1).concat(array_2)
}

function mergeSort(array)
{
  
  
  
}

function replace(array, index_1, index_2)
{
  
  let temp = array[index_1]
  array[index_1] = array[index_2]
  array[index_2] = temp
  
  
}