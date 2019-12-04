import _ from 'lodash';

export function paginate(items,pageNumber,pageSize){
 const startIndex =(pageNumber-1)*pageSize;
return _(items) //inorder to use chaining the 
.slice(startIndex)
.take(pageSize)
.value();//Inorder to return lodash object 
as a normal array we use .value();
 //_.slice(items,startIndex);
 //_.take()

}