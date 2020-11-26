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
  
  while (array_1.length != 0 && array_2.length != 0)
  {
    
    
    
  }
  
}

function mergeSort(array)
{
  
  
  
}