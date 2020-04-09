<template>
  <div class="kanban-board-list">
    <v-card color="grey lighten-2 elevation-1">
      <v-card-title class="subtitle-2">
        <span class="subtitle-2">{{ list.name }}</span>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon small v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item link>
              <v-list-item-title>Delete list</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      
      <v-card-text class="kanban-board-list-cards">
        <Card v-for="card in list.cards" :key="card.id" :card="card" />
      </v-card-text>

      <v-card-actions>
        <AddCard @added="addCard" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Card from './Card.vue';
import AddCard from './list/AddCard.vue';

export default {
  components: { Card, AddCard },

  props: {
    list: { required: true, type: Object, default: () => ({})}
  },

  methods: {
    addCard(name) {
      this.$emit('added', { list: this.list, name })
    }
  }
}
</script>

<style>
  .kanban-board-list {
    width: 300px;
    flex: 0 0 auto;
    display: grid;
    padding: 15px 8px;
    align-items: flex-start;
  }

  .kanban-board-list-cards {
    display: grid;
    grid-gap: 10px;
  }
</style>