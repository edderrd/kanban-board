<template>
  <v-dialog v-model="dialog" scrollable max-width="600px">
    <v-card color="dialog">
        <v-img v-if="card.cover" height="200px" :src="card.cover">
          <v-layout class="pa-2">
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-layout>
        </v-img>
        <v-toolbar dense flat color="dialog">
          <v-toolbar-title>{{ card.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-if="!card.cover" icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      <v-card-text class="pa-0">
        <Description :card="card" />
        <Checklist :card="card" @added="addCheckItem" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Description from './Description.vue';
import Checklist from './Checklist.vue';

export default {
  components: { Description, Checklist },

  data: () => ({
    dialog: false,
    card: {}
  }),

  methods: {
    show(card) {
      this.card = card;
      this.dialog = true;
    },

    addCheckItem(item) {
      this.$emit('addCheckItem', { card: this.card, item })
    }
  }
}
</script>