<template>
  <div class="kanban-list-add-card">
    <v-btn v-if="!adding" @click="adding = true" small text>Add card...</v-btn>
    <v-card v-else class="ma-3 mt-0">
      <v-card-text class="pb-0 ">
        <v-text-field
          v-model="name"
          @keypress.enter="add()"
          @keydown.esc="adding = false"
          autofocus
          outlined
          label="Enter card name..."
        />
      </v-card-text>
      <v-card-actions>
        <v-btn class="primary" @click="add()">Save</v-btn>
        <v-btn text @click="adding = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: null,
    adding: false,
  }),
  
  methods: {
    add() {
      if (!this.name) return;
      this.$emit('added', this.name);
      this.name = null;
    }
  }
}
</script>

<style>
  .kanban-list-add-card {
    width: 100%;
  }
</style>