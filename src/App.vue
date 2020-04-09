<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-toolbar-title>Kanban Board</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Kanban />
    </v-content>
  </v-app>
</template>

<script>
import Kanban from './Kanban.vue';

export default {
  name: 'App',

  components: {
    Kanban
  }
};
</script>
