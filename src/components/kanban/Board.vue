<template>
    <div class="kanban-board-container">
        <draggable v-model="lists" group="lists">
          <transition-group>
            <List :list="list" v-for="list in lists" :key="list.id" @added="addCard" />
          </transition-group>
        </draggable>
      <div>
        <AddList @added="listAdded" />
      </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import List from './List.vue'
import AddList from './board/AddList.vue';

export default {
  components: { draggable, List, AddList },

  props: {
    lists: { required: true, type: Array, default: () => ([]) }
  },

  methods: {
    listAdded(name) {
      this.$emit('listAdded', name);
    },

    addCard(card) {
      this.$emit('cardAdded', card)
    }
  }
}
</script>

<style>
  .kanban-board-container {
    display: flex;
    height: 100%;
    overflow-x: auto;
  }
  .kanban-board-container > div > span {
    display: flex;
    padding: 0 5px;
  }

</style>