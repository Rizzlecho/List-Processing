function sort(arr, params){
    if ( params.length !== 0) {
        return "Error: invalid command parameters";
    }

    return arr.sort(function(a,b){
        if(!isNaN(Number(a)) && !isNaN(Number(b))){
            return a-b;
        }
        else{
            return a.localeCompare(b);
        }
    });
}

