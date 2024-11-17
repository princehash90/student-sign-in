<script setup>

import  { ref } from 'vue'

import {useStudentStore} from "./store/StudentStore.js";// importing the useStudentStore from main.js
const studentStore = useStudentStore();//calling the student function
// store will be available in this NewStudentForm

const newStudentName = ref('')
const newStudentStarID = ref('')

const formErrors = ref([])

function addStudent() {
      formErrors.value = []
      if (!newStudentName.value) {
        formErrors.value.push('Student Name is required')
      }
      if (!newStudentStarID.value) {
        formErrors.value.push('Star ID is required')
      }

      // if there are no errors - is form valid
      if (formErrors.value.length === 0) {
        let student = {
          name: newStudentName.value,// getting the value in the new student name
          starID: newStudentStarID.value,// getting the value in student starID
          present: false
        }
        //studentList.value.push(student)//adding it to the list
        //TODO - adding a new student
        studentStore.addNewStudent(student)// calling the add function in the studentStore js to add new student

        newStudentName.value = ''
        newStudentStarID.value = ''
      }
    }

</script>


<template>

  <div id="new-student-form-errors" class="m-2">
    <!-- TODO show errors from form validation -->
    <div v-if="formErrors.length >0" class="alert alert-danger alert">
      <li v-for="error in formErrors">
        {{ error}}
      </li>
    </div>
  </div>


  <div id="new-student-form" class="card add-student m-2 p-2">
    <h4 class="card-title">Add new student</h4>

    <div class="form-group mb-3">
      <label for="name">Name</label>
      <!-- TODO v-model newStudentName -->
      <input v-model.trim="newStudentName" id="name" class="form-control">
    </div>

    <div class="form-group mb-3">
      <label for="starID">Star ID</label>
      <!-- TODO v-model newStarID -->
      <input v-model.trim="newStudentStarID" id="starID" class="form-control">
    </div>

    <!-- TODO v-on:click event handler -->
    <button v-on:click="addStudent" class="btn btn-primary">Add</button>
  </div>

</template>

<style scoped>

</style>