<template>
  <div class="kanban-card-info-icons">
    <span v-if="card.description">
      <v-icon :size="14">mdi-text-subject</v-icon>
    </span>
    <span v-if="(card.attachments || []).length > 0">
      <v-icon :size="14">mdi-paperclip</v-icon>
      {{ card.attachments.length }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    card: { required: true, type: Object }
  }
}
</script>

<style>
  .kanban-card-info-icons {
    display: flex;
    flex-direction: row;
  }

  .kanban-card-info-icons > span {
    margin-right: 12px;
    font-size: 0.8rem;
  }
</style>