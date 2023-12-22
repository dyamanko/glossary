<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Яманко ДИ Практика. Тема: "Сравнительный анализ JavaScript фреймворков для разработки мобильных приложений"</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Глоссарий</v-btn>
      <v-btn text to="/semantic-graph">Семантический граф</v-btn>
    </v-app-bar>

    <v-main class="gray-background">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.gray-background {
  background-color: #dddddd;
}
</style>
