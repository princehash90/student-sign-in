import {defineStore} from "pinia";
import {ref, computed} from "vue";


export  const useStudentStore =  defineStore('students', ()=>{


 const studentList = ref([
     {name: 'A.Student', starID: 'aa45353', present: false},
     {name: 'b.Student', starID: 'bb45563', present: false},
     {name: 'c.Student', starID: 'cc65353', present: false},
     {name: 'd.Student', starID: 'd45353', present: false}
 ]);

 const mostRecentStudent = ref({});
 //normal js function to add a new student

 function addNewStudent(student) {
     studentList.value.push(student);
 }

 // function to delete using filter
 function deleteStudent(studentToDelete) {
     studentList.value = studentList.value.filter ( (student) => {
         return studentToDelete!== student
     })
     mostRecentStudent.value = {}// resets most recent message
 }
//function to check which student is there or not
 function arrivedOrLeft (student) {
     mostRecentStudent.value = student;
 }
 // function to check the number of students in the list
 const studentCount = computed(()=>{
     return studentList.value.length;
 })

    const sortedStudents = computed(()=>{
        return studentList.value.toSorted(  (s1,s2) =>{
            return s1.name.localeCompare(s2.name);
        })
    })


 return{
     //reactive data
     studentList,
     mostRecentStudent,
     addNewStudent,
     deleteStudent,
     arrivedOrLeft,
     studentCount,
     sortedStudents,
 }

})