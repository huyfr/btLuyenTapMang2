let arr=[];
let temp="";
let x=0;
function addTxt(type)
{
    if (type===1)
    {
        arr[x]=parseFloat(document.getElementById("input").value);
        console.log(arr);
        x++;
        document.getElementById("input").value="";
    }
    if (type===2)
    {
        for (let i=0; i<arr.length; i++)
        {
            temp=temp+" "+arr[i];
        }
        document.getElementById("original").innerHTML="Cac gia tri da nhap vao mang: "+temp;
    }
}
function countCharacters()
{
    let count=0;
    for (let i=0; i<temp.length; i++)
    {
        if (temp[i]==parseInt(temp[i]))
        {
            count++;
        }
    }
    document.getElementById("result").innerHTML=count;
}
