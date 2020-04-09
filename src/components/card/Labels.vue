<template>
  <div class="kanban-card-labels" v-if="(card.labels || []).length > 0">
    <span
      :class="label.color"
      class="kanban-card-label"
      :key="index"
      v-for="(label, index) in card.labels"
    >
      <template v-if="!collapsed">{{ label.name }}</template>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    card: { required: true, type: Object },
    collapsed: { required: false, default: () => (true)}
  }
}
</script>

<style>
  .kanban-card-labels {
    display: grid;
    justify-content: flex-start;
    margin-bottom: 10px;
    grid-gap: 5px;
    grid-template-columns: repeat(5, 1fr);
  }
  
  .kanban-card-label {
    min-width: 20px;
    min-height: 8px;
    border-radius: 4px;
    display: inline-block;
    color: #fefefe;
    font-size: 0.8rem;
  }

  .kanban-card-label::before {
    content: ""
  }
</style>