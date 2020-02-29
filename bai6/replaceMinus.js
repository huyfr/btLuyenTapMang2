let arr=[];
let count=0;

function addTxt()
{
    arr[count]=document.getElementById("input").value;
    count++;
    document.getElementById("input").value="";
}

function replace()
{
    let str="";
    for (let i=0; i<arr.length; i++)
    {
        str=str+arr[i];
    }
    document.getElementById("result").innerHTML="Before: "+str+"<br>"+"After: "+str.replace(/-/g,'_');
}