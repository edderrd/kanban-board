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
        <Board :lists="lists" @added="addList" />
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
      {id: 1, name: 'Backlog', order: 1, cards: [
        {id: 11, name: "First Card", order: 1, labels: [{ name: '', color: 'green' }, { name: 'documentation', color: 'cyan' }]},
        {id: 12, name: "Second Card", order: 2, description: "Some description here", cover: "https://via.placeholder.com/300/00BCD4/FFFFFF"},
        {id: 13, name: "Second Card", order: 3, description: "some more description", attachments: [{id: 1}]},
      ]},
      {id: 2, name: 'To Do', order: 2, cards: []},
      {id: 3, name: 'Doing', order: 3, cards: []},
      {id: 4, name: 'Done', order: 3, cards: []},
    ]
  }),

  methods: {
    addList(name) {
      this.lists.push({
        id: this.lists.length + 1,
        name,
        cards: [],
        order: this.lists.length + 1,
      })
    }
  }
};
</script>
