<template>
  <table class="table table-hover table-borderless">
    <thead>
      <tr class="table-default border-bottom">
        <th scope="col" class="lead">{{diseaseLabel}}</th>
        <th scope="col" class="lead">{{transmissionLabel}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="disease in data" :key="disease.name">
        <th scope="row">{{disease.name}}</th>
        <td>{{disease.transmission}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Vaxinlife-table",
  props: {
    data: {
      type: Array
    },
    diseaseLabel: {
      type: String
    },
    transmissionLabel: {
      type: String
    }
  }
};
</script>

<style>
</style>