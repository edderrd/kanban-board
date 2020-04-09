<template>
  <v-list dense class="transparent">
    <v-subheader class="ml-2">
      DESCRIPTION
    </v-subheader>
    <v-list-item v-if="card.description">
      <v-list-item-content>
        {{ card.description }}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    card: { required: true, type: Object }
  }
}
</script>