const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const courseAmount = document.getElementById("Amount");
const addBtn = document.querySelector(".btn");
const studentList = document.getElementById("studentList")
console.log(addBtn);


addBtn.addEventListener("click",function(event){
  // console.log("its working")
  event.preventDefault();


  if(studentName.value == "" || courseName.value =="" || courseAmount.value == ""){
    alert("fill all input gape")
  }else{

    // creating table row 
    const newRow = document.createElement("tr");

    // Creating student names
    const newStudentName = document.createElement("td");

    newStudentName.innerHTML = studentName.value;
    newRow.appendChild(newStudentName);
    studentList.appendChild(newRow);

    const newCourseName = document.createElement("td");

    newCourseName.innerHTML = courseName.value;
    newRow.appendChild(newCourseName);
    studentList.appendChild(newRow);

    const newCourseAmount = document.createElement("td");

    newCourseAmount.innerHTML = courseAmount.value;
    newRow.appendChild(newCourseAmount);
    studentList.appendChild(newRow);

    studentName.value = "";
    courseName.value = "";
    courseAmount.value = "";

  }

})