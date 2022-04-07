student_array=[];
function submit(){
var display_student_array=[];
for(var j=1; j <= 5; j++){
    var name_of_the_student=document.getElementById("input_"+j).value;
    console.log(name_of_the_student);
    student_array.push(name_of_the_student);
}
console.log(student_array);
var length_of_the_student_array=student_array.length;
console.log(length_of_the_student_array);
for(var hi=0; hi<length_of_the_student_array; hi++){
    display_student_array.push("<h4>Name-"+student_array[hi]+"</h4>");
    console.log(display_student_array);
}
    document.getElementById("display_name_with_comma").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_comma").innerHTML=remove_commas;
    document.getElementById("button1").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    console.log(student_array);
    var display_student_array_sort=[];
    var length_of_the_student_array=student_array.length;
    console.log(length_of_the_student_array);
    for(var hi=0; hi<length_of_the_student_array; hi++){
        display_student_array_sort.push("<h4>Name-"+student_array[hi]+"</h4>");
        console.log(display_student_array_sort);
        var remove_commas=display_student_array_sort.join(" ");
        console.log(remove_commas);

    }
    document.getElementById("display_name_without_comma").innerHTML=remove_commas;
}