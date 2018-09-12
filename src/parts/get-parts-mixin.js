export default {
  created() {
    this.$store.dispatch("robots/getParts");
  },
  computed: {
    parts() {
      return (
        // return parts unless it isn't loaded yet
        // if so, return parts as an empty object
        this.$store.state.robots.parts || {
          heads: [],
          arms: [],
          torsos: [],
          bases: []
        }
      );
    }
  }
};
