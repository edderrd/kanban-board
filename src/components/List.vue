<template>
  <div class="kanban-board-list">
    <v-card>
      <v-card-title class="subtitle-2">
        <span class="subtitle-2">{{ list.name }}</span>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon small v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item link>
              <v-list-item-title>Delete list</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-btn text small>Add card...</v-btn>
      </v-card-actions>
    </v-card>
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
    width: 250px;
    flex: 0 0 auto;
    display: grid;
    padding: 15px 8px;
    align-items: flex-start;
  }
</style>