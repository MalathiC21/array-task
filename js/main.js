// To print even numbers
let a=[5,76,3,67,2,3,7];
let b=[];
for(let i=0;i<a.length;i++)
{
if(a[i]%2==0)
{
b.push(a[i]);
}
}
console.log(b)

// To print multiplication of 11
let x=[22,5,32,78,99,23,66]
let y=[];
for(let i=0;i<x.length;i++)
{
if(x[i]%11==0)
{
y.push(x[i]);
}
}
console.log(y);

// To print addition of given array
let m=[1,2,3,4,5];
let n=0;
for(let i=0;i<m.length;i++)
{
n+=m[i];
}
console.log(n);

// To print average of given array
let c=[1,2,3,4,5];
let s=0;
let len=c.length;
for(let i=0;i<len;i++)
{
s+=c[i];
result=(s/len);
}
console.log(result);


// To print sum of even numbers
let d=[2,4,7,9,12,3]
let res=0;
for(let i=0;i<d.length;i++)
{
if(d[i]%2==0)
{
res+=d[i];
}
}
console.log(res);



// To find number of amstrong numbers
let array=[153,250,420,123,370,896];
let r=[];
let sum=0;
let rem,z;

for(let i=0;i<array.length;i++)
{
let n=array[i];
sum=0;
while(n>0)
{
rem=(n%10);
z=rem**3;
n=(n-rem)/10;
sum+=z;
}

if(array[i]==sum)
{
r.push(array[i]);
}
}
console.log(r);
console.log(r.length);


// To find the number of digits
let arr=[12,456,7823,981];
let p=[];
let rem1;
let count=0;
for(let i=0;i<arr.length;i++)
{
let n=arr[i];
count=0;
while(n>0)
{
rem1=n%10;
count+=1;
n=(n-rem1)/10;
}
p.push(count);
}
console.log(p);


// To find maximum value in an array
let array1=[34,87,12,97,40];
let maxNum=array1[0];
for(i=1;i<array1.length;i++)
{
if(array1[i]>maxNum)
{
maxNum=array1[i];
}
}
console.log(maxNum);


