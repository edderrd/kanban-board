<template>
  <v-list dense class="transparent">
    <v-subheader class="ml-3">CHECKLISTS</v-subheader>
    <draggable v-model="card.checkItems" group="checkItems">
      <transition-group>
        <v-list-item :key="index" v-for="(item, index) in card.checkItems">
          <v-list-item-action>
            <v-checkbox v-model="item.checked" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.content }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </transition-group>
    </draggable>
    <v-list-item class="kanban-card-check-item-add">
      <v-list-item-content>
        <span v-if="!adding">
          <v-btn small text  @click="adding = true">Add item...</v-btn>
        </span>
        <v-card v-else class="pa-0 elevation-0">
          <v-card-text class="pa-0">
            <v-text-field
              autofocus
              v-model="content"
              @keydown.esc="adding = false"
              @keypress.enter="add()"
              outlined
              placeholder="Add item..."
            />
          </v-card-text>
          <v-card-actions class="pa-0">
            <v-btn @click="add()" color="primary">Add</v-btn>
            <v-btn text @click="adding = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
        
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import Vue from 'vue';
import draggable from 'vuedraggable';

export default {
  props: {
    card: { required: true, type: Object }
  },

  components: { draggable },
  
  data: () => ({
    content: null,
    adding: false,
  }),

  methods: {
    add() {
      if (!this.content) return;
      this.$emit('added', { content: this.content, checked: false });
      this.content = null;

      Vue.nextTick(() => {
        this.$el
          .getElementsByClassName("kanban-card-check-item-add")[0]
          .scrollIntoView({ block: 'end',  behavior: 'smooth' });
      })
    }
  }
}
</script>