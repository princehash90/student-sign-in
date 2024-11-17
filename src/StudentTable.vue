<script setup>

import {useStudentStore} from "./store/StudentStore.js"; // importing the studentList in the studentStore.js

import  {storeToRefs} from "pinia"; // storeToRefs converts the properties in the store into refs into a component

import {computed} from "vue";

import StudentRow from "./components/StudentRow.vue";

const studentStore = useStudentStore(); // calling the function that we called above on line 3

const  { sortedStudents, studentCount,}= storeToRefs(studentStore); //  {} turn the studentList with object with names, just list
//  convert the things in store to refs

const deleteStudent = (student) =>{ // creating the delete function in here so when it is called, it works
  studentStore.deleteStudent(student)
}
const  arrivedOrLeft = (student, isStudentPresent) => {// this is a function to update the most recent student
  student.present = isStudentPresent // updating students
  studentStore.arrivedOrLeft(student)// telling the store if someone arrived or left
}
// function to display the correct grammar based on the number of students in the list
const pluralStudentMessage = computed(()=>{
  if (studentCount.value===1){
    return 'There is 1 student in class'
  }else {
    return `There are ${studentCount.value} students in class`
  }
})

</script>

<template>

    <div id="student-list-table" class="card m-2 p-2">
      <h4 class="card-title">Student List</h4>
      <h5 class="card-subtitle text-muted">{{pluralStudentMessage}}.</h5>
      <div id="student-table">
        <table class="table">
          <thead>
          <tr>
            <th>Name</th>
            <th>StarID</th>
            <th>Present?</th>
            <th>Delete</th>
          </tr>
          </thead>

          <tbody>

          <StudentRow v-for="student in sortedStudents"
                      v-bind:student="student"
                      v-on:arrived-or-left="arrivedOrLeft"
                      v-on:delete-student="deleteStudent"
          ></StudentRow>


          </tbody>

        </table>
      </div>
    </div>

</template>

<style scoped>

#student-table {
  max-height: 400px;
  overflow: scroll;
}

th, tr {
  width: 25%;
}

</style>