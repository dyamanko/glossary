import data from '../assets/data.json';

export default {
  getGlossaryTerms() {
    return data.glossary;
  },
  getSemanticGraphData() {
    return data.semanticGraph;
  }
};
