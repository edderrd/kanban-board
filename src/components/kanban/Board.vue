<template>
  <div class="kanban-board-container">
    <List :list="list" v-for="list in lists" :key="list.id" @added="addCard" />
    <AddList @added="listAdded" />
  </div>
</template>

<script>
import List from './List.vue'
import AddList from './board/AddList.vue';

export default {
  components: { List, AddList },

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
    overflow-y: hidden;
    flex-wrap: nowrap;
    padding: 0 5px;
    max-height: inherit;
  }

</style>