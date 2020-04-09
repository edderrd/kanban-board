<template>
  <div class="kanban-board-list">
    <div>
      <span>{{ list.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: { rqeuired: true, type: Object, default: () => ({})}
  }
}
</script>

<style>
  .kanban-board-list {
    display: flex;
    width: 220px;
    border: 1px solid blue;
    flex: 0 0 auto;
  }
</style>