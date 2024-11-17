<script setup>
import {ref} from "vue";

const props = defineProps({
  student:Object
})

const emit = defineEmits(['arrived-or-left', 'delete-student'])

const isStudentPresent = ref (props.student.present)// checking if the student is present or


const notifyArriveOrLeft = ()=>{
  //telling parent that student arrived or left- emit event
  emit('arrived-or-left', props.student, isStudentPresent.value)
}

const confirmThenDeleteStudent = ()=>{
  ////telling parent that student deleted or - emit event
  emit('delete-student',props.student)
}

</script>



<template>

  <tr class = "align-middle" v-bind:class="{present: student.present, absent: !student.present }">

    <!-- v bind changes the color of the text when checked-->
    <td>{{student.name}}</td>
    <td>{{student.starID}}</td>
    <td><input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArriveOrLeft">
      <span v-if="student.present" class="mx-3">Here!</span>
      <span v-else class="mx-3"> Not Present</span>
    </td>
    <td>
      <button v-on:click="confirmThenDeleteStudent" class="btn btn-danger" >
        <i class="bi bi-trash-fill"></i>Delete</button><!--adding a delete button-->
    </td>

  </tr>

</template>

<style scoped>

.present {
  color: gray;
  font-style: italic;
}

.absent {
  color: black;
  font-weight: bold;
}

</style>