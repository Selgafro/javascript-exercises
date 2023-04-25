const sumAll = function(start, end) {
    let total = 0;
    if ((typeof(start) && typeof(end)) == "string"){
        return "ERROR"
    } else if((start && end) <= -1){
        return "ERROR"
    } else if((typeof(start) && typeof(end) == "object")){
        return "ERROR"
    } else{
        if (start < end){
            for (let i = start; i <= end; i++){
                total += Number(i);
            }
        } else if (start > end){
            for (let i = end; i <= start; i++){
                total+= Number(i);
            }
        }
        return total;
    }  
};

// Do not edit below this line
module.exports = sumAll;
