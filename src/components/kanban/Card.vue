<template>
  <v-card color="card" hover max-width="250px" @click="$emit('selected', card)">
    <v-img v-if="card.cover" :src="card.cover" height="200px"></v-img>
    <v-card-text>
      <Labels :card="card" />
      <span>{{ card.name }}</span>
      <InfoIcons :card="card" />
    </v-card-text>
  </v-card>
</template>

<script>
import Labels from  "./card/Labels.vue";
import InfoIcons from  "./card/InfoIcons.vue";

export default {
  components: { Labels, InfoIcons },

  props: {
    card: { required: true, type: Object },
  }
}
</script>