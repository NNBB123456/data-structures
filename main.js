student_array=[];
function submit(){
    var name_1=document.getElementById("input_1").value;
    var name_2=document.getElementById("input_2").value;
    var name_3=document.getElementById("input_3").value;
    var name_4=document.getElementById("input_4").value;
    var name_5=document.getElementById("input_5").value;
    student_array.push(name_1);
    student_array.push(name_2);
    student_array.push(name_3);
    student_array.push(name_4);
    student_array.push(name_5);
    console.log(student_array);
    document.getElementById("display").innerHTML=student_array;
    document.getElementById("button1").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("display").innerHTML=student_array;
}