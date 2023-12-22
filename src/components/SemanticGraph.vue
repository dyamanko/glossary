<template>
  <div ref="mindMap" class="mind-map"></div>
</template>

<script>
import { Network } from 'vis-network';
import dataService from '../services/dataService';

export default {
  data() {
    return {
      network: null,
    };
  },
  mounted() {
    this.createNetwork();
  },
  methods: {
    createNetwork() {
      const container = this.$refs.mindMap;
      const glossary = dataService.getGlossaryTerms();
      const semanticGraph = dataService.getSemanticGraphData();
      
      const nodes = glossary.map(term => ({
        id: term.id,
        label: term.name,
        x: term.x,
        y: term.y,
        physics: false,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
      }));

      const edges = semanticGraph.map(link => ({
        from: link.source,
        to: link.target,
        label: link.type
      }));

      const options = {
        nodes: {
          color: {
            border: 'gray',
            background: 'white'
          },
          font: {
            color: 'gray',
            size: 20
          },
          shape: "box"
        },
        edges: {
          color: 'gray',
          arrows: 'to',
          font: {
            color: 'black',
            size: 20
          }
        }
      };

      this.network = new Network(container, { nodes, edges }, options);

      // this.network.on("dragEnd", params => {
      //   this.handleDragEnd(params);
      // });
    },
    // handleDragEnd(params) {
    //   const updatedNodes = params.nodes.map(nodeId => {
    //     const { x, y } = this.network.getPositions(nodeId)[nodeId];
    //     return { id: nodeId, x, y };
    //   });

    //   console.log('Updated Nodes:', updatedNodes);
    // }
  }
};
</script>

<style>
.mind-map {
  width: 100%;
  height: 700px;
}
</style>
