/**
* @param {Array} arr
* @param {number} size
* @return {Array}
*/
var chunk = function(arr, size) {
    const chunkedArray=[];
    let index =0;
    while(index<arr.length){
        chunkedArray.push(arr.slice(index,index+size));
        index += size;
    }
    return chunkedArray;
 };
 

 /**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunkReduce = function(arr, size) {
    return arr.reduce((chunkedArray,element)=>{
        const lastChunk = chunkedArray[chunkedArray.length-1];
        if(!lastChunk||lastChunk.length==size){
            chunkedArray.push([element]);
        }else{
            lastChunk.push(element);
        }
        return chunkedArray;
    },[]);
};
