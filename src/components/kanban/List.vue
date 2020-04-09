<template>
  <div class="kanban-board-list v-dialog--scrollable">
    <v-card flat color="list">
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
          <draggable v-model="list.cards" group="cards" @start="drag = true" @end="drag = false">
            <transition-group>
              <Card v-for="card in list.cards" :key="card.id" :card="card" @selected="selectCard" />
            </transition-group>
          </draggable>
        <br class="kanban-card-end">
      </v-card-text>

      <v-card-actions class="mt-0 pt-0">
        <AddCard @added="addCard" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import draggable from 'vuedraggable'
import Card from './Card.vue';
import AddCard from './list/AddCard.vue';

export default {
  components: { draggable, Card, AddCard },

  props: {
    list: { required: true, type: Object, default: () => ({})}
  },

  methods: {
    addCard(name) {
      this.$emit('added', { list: this.list, name })
      
      Vue.nextTick(() => {
        this.$el
          .getElementsByClassName("kanban-card-end")[0]
          .scrollIntoView({ block: 'end',  behavior: 'smooth' });
      })
    },
    selectCard(card) {
      this.$emit('cardSelected', {...card, list: this.list})
    }
  },
}
</script>

<style>
  .kanban-board-list {
    width: 300px;
    flex: 0 0 auto;
    display: grid;
    padding: 15px 8px;
    align-items: flex-start;
    max-height: 92vh;

  }

  .kanban-board-list .v-card {
    overflow: hidden;
    max-height: inherit;
    flex-wrap: nowrap;
  }

  .kanban-board-list-cards > div > span {
    display: grid;
    grid-gap: 10px;
  }
</style>