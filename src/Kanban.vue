<template>
  <v-container fluid class="pa-0" fill-height>
    <Board :lists="lists" @listAdded="addList" @cardAdded="addCard" @addCheckItem="addCheckItem" />  
  </v-container>
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
        {id: 11, name: "First Card", order: 1, labels: [{ name: '', color: 'green' }, { name: 'documentation', color: 'cyan', checkItems: [] }]},
        {id: 12, name: "Second Card", order: 2, description: "Some description here", cover: "https://via.placeholder.com/300/00BCD4/FFFFFF", checkItems: []  },
        {id: 13, name: "Second Card", order: 3, description: "some more description", checkItems: [],  attachments: [{id: 1}]},
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
        checkItems: [],
      })
    },

    addCheckItem(item) {
      const list = this.lists.find(i => item.card.list.id === i.id)
      if (!list) return
      const card = list.cards.find(c => c.id === item.card.id)
      if (!card) return
      card.checkItems.push( item.item )
    }
  }
}
</script>