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


var myul=document.getElementById("selectcol");
for(i=0;i<tableHedings.length;i++)
{
    var newoptn=document.createElement("option")
    newoptn.innerText=tableHedings[i]
    myul.appendChild(newoptn)
}

function filterFunc()
{
    var x=document.getElementById("valuetosearch");
    var y=x.value//input text value to search
    var colToSearch=document.getElementById("selectcol").value;
    console.log(colToSearch)
    var indexOfColToSearch=tableHedings.indexOf(colToSearch);//index of name is 0---index of roll is 1 and location is 2
    console.log(indexOfColToSearch);

    for(i=1;i<tr.length;i++)
    {
        var tdVal=tr[i].getElementsByTagName("td")[indexOfColToSearch]
        var valueToCompareTo=tdVal.innerText;
        // if(valueToCompareTo==y)
        if (valueToCompareTo.toLowerCase().startsWith((y.toLowerCase())))
        {
            console.log("found");
            tr[i].style.display="";

        }
        else{
            tr[i].style.display="none";
        }
       
    }
    

}


// code ends by surya sikh rej