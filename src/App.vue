<template>
  <AppLayout>
    <Kanban />
  </AppLayout>
</template>

<script>
import AppLayout from './AppLayout.vue';
import Kanban from './Kanban.vue';

export default {
  name: 'App',
  
  components: {
    AppLayout,
    Kanban
  },
};
</script>
