console.log(20);
console.log(20.5);
console.log("balu");
console.log([10,20,30,40,50]);
console.table({Myname:"balu",age:27,address:"karur"});
console.table({Myname:"balu",age:27,address:"karur"},{Myname:"mounam",age:24,address:"dgl"});
console.table([{Myname:"balu",age:27,address:"karur"},
	{Myname:"mounam",age:24,address:"dgl"},
	{Myname:"anjala",age:27,address:"cbe"}]);
console.warn("this is warning message...")
console.error("this is error message...")  

limit=10;
mgs="this is even num:";
for (i=2;i<=10;i++)
{
	console.assert(i%2==0,{i,mgs});
}