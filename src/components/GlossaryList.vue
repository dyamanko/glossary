<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="term in glossary" :key="term.id">
        <v-card class="my-card">
          <v-card-title>{{ term.name }}</v-card-title>
          <v-card-text>{{ term.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dataService from '../services/dataService';

export default {
  name: "GlossaryList",
  data() {
    return {
      glossary: []
    };
  },
  created() {
    this.glossary = dataService.getGlossaryTerms();
  }
};
</script>

<style>
.my-card {
  min-height: 230px; 
}
</style>
