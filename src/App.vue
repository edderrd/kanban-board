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
      <v-container fluid fill-height class="pa-0 grey lighten-4">
        <Board :lists="lists" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Board from './components/Board.vue';

export default {
  name: 'App',

  components: {
    Board,
  },

  data: () => ({
    lists: [
      {id: 1, name: 'Backlog', order: 1, cards: []},
      {id: 2, name: 'To Do', order: 2, cards: []},
      {id: 3, name: 'Doing', order: 3, cards: []},
      {id: 4, name: 'Done', order: 3, cards: []},
      {id: 5, name: 'List 5', order: 5, cards: []},
      {id: 6, name: 'List 6', order: 6, cards: []},
      {id: 7, name: 'List 7', order: 7, cards: []},
      {id: 8, name: 'List 8', order: 8, cards: []},
      {id: 9, name: 'List 9', order: 9, cards: []},
    ]
  }),
};
</script>
