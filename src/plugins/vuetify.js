import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: colors.grey.lighten3,
        list: colors.grey.lighten2,
      },
      dark: {
        background: colors.grey.darken3,
        list: "#393939",
        card: colors.grey.darken4,
        primary: colors.lightBlue.darken3,
        dialog: colors.grey.darken4,
      }
    }
  }
});
