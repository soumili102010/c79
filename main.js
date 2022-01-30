student_arry=[];

function submit()
{
var name1=document.getElementById("student1").value;
var name2=document.getElementById("student2").value;
var name3=document.getElementById("student3").value;
var name4=document.getElementById("student4").value;

student_arry.push(name1);
student_arry.push(name2);
student_arry.push(name3);
student_arry.push(name4);

document.getElementById("display").innerHTML=student_arry;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}

function sort()
{
    student_arry.sort();
    document.getElementById("display").innerHTML=student_arry;
}
    