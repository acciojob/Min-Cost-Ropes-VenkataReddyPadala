function mincost(arr)
{ 
//write your code here
// return the min cost
		let res=0;
  while(arr.length>1){
	  let sum=0;
	  arr.sort((a,b)=>a-b);
	  sum=arr[0]+arr[1];
	  arr.splice(0,2);
	  res+=sum;
	  arr.push(sum);
  }
	return res;
}

module.exports=mincost;
