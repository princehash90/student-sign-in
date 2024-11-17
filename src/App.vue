<script setup>
import NewStudentForm from "./NewStudentForm.vue";
import StudentTable from "./StudentTable.vue";
import StudentMessage from "./StudentMessage.vue";
</script>

<template>

  <NewStudentForm></NewStudentForm>
  <StudentTable></StudentTable>/
  <StudentMessage></StudentMessage>


</template>

<style scoped>

#student-table {
  max-height: 400px;
  overflow: scroll;
}

th, tr {
  width: 25%;
}

.present {
  color: gray;
  font-style: italic;
}

.absent {
  color: black;
  font-weight: bold;
}



</style>