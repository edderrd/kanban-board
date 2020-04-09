<template>
  <div class="kanban-board-list">
    <v-btn
      id="testing1"
      @click="adding = true"
      text
      v-if="!adding"
    >
      Add list...
    </v-btn>
    <v-card v-else>
      <v-card-text class="pb-0">
        <v-text-field
          v-model="name"
          @keypress.enter="save()"
          @keydown.esc="adding = false"
          autofocus
          outlined
          label="Enter list name..."
        />
      </v-card-text>
      <v-card-actions>
        <v-btn class="primary" @click="save()">Save</v-btn>
        <v-btn text @click="adding = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
import Vue from "vue";

export default {
  data: () => ({
    adding: false,
    name: null
  }),

  methods: {
    save() {
      if (!this.name) return;
      this.$emit('added', this.name);
      this.name = "";

      Vue.nextTick(() => {
        this.$el.scrollIntoView({ block: 'end',  behavior: 'smooth' });
      })
    }
  }
}
</script>