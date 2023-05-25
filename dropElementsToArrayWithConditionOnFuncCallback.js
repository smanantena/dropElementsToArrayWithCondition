function dropElements(arr, func) {
    let result = [...arr];
    let test = computDeletedNumber(func, arr.length, arr);
    let numIndexToDelete = arr.length;
   // console.log(test);
    if(test["numWantDelete"] == null) {
      return arr;
    } else if(test["numThatRightCondition"] == arr.length || test["numThatRightCondition"] == null) {
      numIndexToDelete = test["numWantDelete"];
    } else if(test["numThatRightCondition"] < arr.length) {
      numIndexToDelete = test["numThatRightCondition"];
    }
    
    for(let i = 0 ; i < numIndexToDelete ; i++) {
      result.shift();
    }
    
    return result;
  }
  
  function computDeletedNumber(func, length, arr) {
    let result = {"numWantDelete":null, "numThatRightCondition":null};
    for(let i = 1 ; i <= length  ; i++) {
      if(!func(arr[i-1])){
        result['numWantDelete'] = arr[i-1];
      } else {
        result['numThatRightCondition'] = arr[i-1];
      }
    }
    return result;
  }
  
  //console.log(computDeletedNumber(function(n) {return n > 5;}, 4));
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 3;}));