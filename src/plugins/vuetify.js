import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        accent: '#F2545B',
        anchor: '#F2545B',
        background: '#F3F7F0',
        error: '#FF5252',
        info: '#2196F3',
        primary: '#244856',
        secondary: '#A93F55',
        success: '#4CAF50',
        warning: '#FFC107',
        cream: '#F3F7F0'
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
