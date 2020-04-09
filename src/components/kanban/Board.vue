<template>
    <div class="kanban-board-container">
        <draggable v-model="lists" group="lists">
          <transition-group>
            <List :list="list" v-for="list in lists" :key="list.id" @added="addCard" @cardSelected="showCard" />
          </transition-group>
        </draggable>
      <div>
        <AddList @added="listAdded" />
      </div>
      <CardDialog @addCheckItem="addCheckItem" ref="cardDialog" />
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import List from './List.vue'
import AddList from './board/AddList.vue';
import CardDialog from './card/Dialog.vue';

export default {
  components: { draggable, List, AddList, CardDialog },

  props: {
    lists: { required: true, type: Array, default: () => ([]) }
  },

  methods: {
    listAdded(name) {
      this.$emit('listAdded', name);
    },

    addCard(card) {
      this.$emit('cardAdded', card)
    },
    
    showCard(card) {
      this.$refs.cardDialog.show(card)
    },

    addCheckItem(item) {
      this.$emit('addCheckItem', item);
    }
  }
}
</script>

<style>
  .kanban-board-container {
    display: flex;
    height: 100%;
    overflow-x: auto;
  }
  .kanban-board-container > div > span {
    display: flex;
    padding: 0 5px;
  }

</style>