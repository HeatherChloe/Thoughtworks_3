function calculate_median(arr) {
    var arr_even = [];
    var i_even   = 0;
    // get even num
    for(var i = 0; i < arr.length; ++i){
        if((i+1) % 2 == 0){
            arr_even[i_even] = arr[i];
            i_even++;
        }
    }

    arr_even.sort();
    var len = arr_even.length;
    var rst = 0;
    if(len % 2 == 0){
        rst = (arr_even[len/2-1] + arr_even[len/2]) / 2;
    }else{
        rst = arr_even[len/2-0.5];
    }
    return rst;
}

module.exports = calculate_median;
