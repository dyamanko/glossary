import Vue from 'vue';
import Router from 'vue-router';
import GlossaryList from './components/GlossaryList.vue';
import SemanticGraph from './components/SemanticGraph.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Glossary',
      component: GlossaryList
    },
    {
      path: '/semantic-graph',
      name: 'SemanticGraph',
      component: SemanticGraph
    }
  ]
});
