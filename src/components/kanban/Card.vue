<template>
  <v-card hover max-width="250px">
    <v-img v-if="card.cover" :src="card.cover" height="200px"></v-img>
    <v-card-text>
      <Labels :card="card" />
      <span class="grey--text text--darken-4">{{ card.name }}</span>
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