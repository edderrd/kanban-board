<template>
  <Board class="grey lighten-4" :lists="lists" @listAdded="addList" @cardAdded="addCard" />  
</template>

<script>
import Board from './components/kanban/Board.vue';

export default {
  components: {
    Board,
  },

  data: () => ({
    lists: [
      {id: 1, name: 'Backlog', order: 1, cards: [
        {id: 11, name: "First Card", order: 1, labels: [{ name: '', color: 'green' }, { name: 'documentation', color: 'cyan' }]},
        {id: 12, name: "Second Card", order: 2, description: "Some description here", cover: "https://via.placeholder.com/300/00BCD4/FFFFFF"},
        {id: 13, name: "Second Card", order: 3, description: "some more description", attachments: [{id: 1}]},
      ]},
      {id: 2, name: 'To Do', order: 2, cards: []},
      {id: 3, name: 'Doing', order: 3, cards: []},
      {id: 4, name: 'Done', order: 3, cards: []},
    ]
  }),

  methods: {
    addList(name) {
      this.lists.push({
        id: this.lists.length + 1,
        name,
        cards: [],
        order: this.lists.length + 1,
      })
    },

    addCard(card) {
      const list = this.lists.find(i => card.list.id === i.id)
      if (!list) return;

      list.cards.push({
        id: list.cards.length + 1,
        name: card.name,
        order: list.cards.length + 1,
      })
    }
  }
}
</script>