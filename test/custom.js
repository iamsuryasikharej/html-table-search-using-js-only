// code added by surya sikha rej

var tableHedings=[];
var table=document.getElementById("mytable");
// var table=document.getElementById("result");
var tr=table.getElementsByTagName("tr");
colNames=tr[0].getElementsByTagName("th");
for(i=0;i<colNames.length;i++)
{
    tableHedings.push(colNames[i].innerText);
}


var myul=document.getElementsByClassName("selectcol");
console.log(myul);

for(j=0;j<myul.length;j++)
{
    
for(i=0;i<tableHedings.length;i++)
{
    var newoptn=document.createElement("option")
    newoptn.innerText=tableHedings[i];
    myul[j].appendChild(newoptn);
}
}

// function filterFunc()  ====================> for only one col
// {
//     var x=document.getElementById("valuetosearch");
//     var y=x.value//input text value to search
//     var colToSearch=document.getElementById("selectcol").value;
//     console.log(colToSearch)
//     var indexOfColToSearch=tableHedings.indexOf(colToSearch);//index of name is 0---index of roll is 1 and location is 2
//     console.log(indexOfColToSearch);

//     for(i=1;i<tr.length;i++)
//     {
//         var tdVal=tr[i].getElementsByTagName("td")[indexOfColToSearch]
//         var valueToCompareTo=tdVal.innerText;
//         // if(valueToCompareTo==y)
//         if (valueToCompareTo.toLowerCase().startsWith((y.toLowerCase())))
//         {
//             console.log("found");
//             tr[i].style.display="";

//         }
//         else{
//             tr[i].style.display="none";
//         }
       
//     }
    

// }

function filterFunc()
{
    var x=document.getElementsByClassName("valuetosearch");
    console.log(x[1].value);

    var myMap=new Map();
    for(i=0;i<x.length;i++)
    {
        myMap.set(myul[i].value,x[i].value);
    }
    console.log(myMap);

    var indexToSearch=[];
    for(i=0;i<myul.length;i++)
    {
        indexToSearch.push(tableHedings.indexOf(myul[i].value))
    }
    console.log(indexToSearch);
    for(i=1;i<tr.length;i++)
    {

        var tdVal1=tr[i].getElementsByTagName("td")[indexToSearch[0]];
        var valueToCompareTo1=tdVal1.innerText;
        var tdVal2=tr[i].getElementsByTagName("td")[indexToSearch[1]];
        var valueToCompareTo2=tdVal2.innerText;
        
        
        if (valueToCompareTo1.toLowerCase().startsWith((x[0].value.toLowerCase())) && valueToCompareTo2.toLowerCase().startsWith((x[1].value.toLowerCase())))
        {
            console.log("found");
            tr[i].style.display="";

        }
        else{
            tr[i].style.display="none";
        }
       
    }

   

}


