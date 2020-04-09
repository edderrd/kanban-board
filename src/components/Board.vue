<template>
  <div class="kanban-board-container">
    <List :list="list" v-for="list in lists" :key="list.id" />
  </div>
</template>

<script>
import List from './List.vue'

export default {
  components: { List },

  props: {
    lists: { required: true, type: Array, default: () => ([]) }
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