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
    border: 1px solid red;
    height: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  .kanban-board-container > div {
    margin-right: 15px;
  }

</style>