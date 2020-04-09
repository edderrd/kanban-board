<template>
  <div class="kanban-board-container">
    <List :list="list" v-for="list in lists" :key="list.id" />
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
      this.$emit('added', name);
    }
  }
}
</script>

<style>
  .kanban-board-container {
    display: flex;
    height: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 0 5px;
  }

</style>