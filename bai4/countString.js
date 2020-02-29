let arr=[];
let temp="";
let x=0;
function addTxt()
{
    arr[x]=document.getElementById("inputTxt").value;
    console.log(arr);
    x++;
    document.getElementById("inputTxt").value="";
}
function countTxt()
{
    let count=0;
    for (let i=0; i<arr.length; i++)
    {
        temp=temp+arr[i];
    }
    count=temp.length;
    document.getElementById("result").innerHTML="Nhung tu vua nhap vao: "+temp+"<br>"+"So ky tu trong chuoi: "+count;
}