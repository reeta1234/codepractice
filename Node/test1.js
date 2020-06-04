function bubbleSort(array) {
    done = false
    while(!done){
        done = true
        for(let i=1;i<array.length;i++){
            if(array[i-1]>array[i]){
                done = false
                var temp = array[i-1]
                array[i-1]=array[i]
                array[i]=temp
            }
        }
    }
    return array;
  }
   
  var numbers = [12, 10, 15, 11, 14, 13, 16];
  bubbleSort(numbers);
  console.log(numbers);

  //--------------------------------------------------------------------------------

  const singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
  ];
  
  function compare(a, b) {
    const bandA = a.band.toUpperCase();
    const bandB = b.band.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  
  console.log(singers.sort(compare));