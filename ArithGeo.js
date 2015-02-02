function ArithGeo(arr) {

diff = arr[1]-arr[0]
ratio = arr[1]/arr[0]

  for (i=0;i<arr.length-1;i++) {
    if(arr[i+1]-arr[i] != diff) {
      for (j=0;j<arr.length-1;j++){
        if(arr[j+1]/arr[j] != ratio) {
          return -1
          }
        } return "Geometric"
      }
    } return "Arithmetic"
}