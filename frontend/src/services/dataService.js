import axios from 'axios';

export default {
  async getGlossaryTerms() {
    const response = await axios.get('/api/data/glossary');
    return response.data;
  },
  async getSemanticGraphData() {
    const response = await axios.get('/api/data/semanticGraph');
    return response.data;
  }
};
