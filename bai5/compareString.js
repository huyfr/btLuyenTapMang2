function compareStr()
{
    let strA=prompt("Nhap chuoi a");
    let strB=prompt("Nhap chuoi b");
    if(strA.length !== strB.length){
        document.write("Hai chuoi khac nhau");
    }
    else
    {
        let arr1=strA.split(" ");
        let arr2=strB.split(" ");
        let count=0;
        for(let i=0;i<arr1.length;i++)
        {
            if(arr1[i]===arr2[i])
            {
                count++;
            }
        }
        if(count === arr1.length)
        {
            document.write("Hai chuoi giong nhau");
        }
        else
        {
            document.write("Hai chuoi khac nhau");
        }
    }
}
compareStr();