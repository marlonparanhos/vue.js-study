export default {
  created() {
    this.$store.dispatch("getParts");
  },
  computed: {
    parts() {
      return (
        // return parts unless it isn't loaded yet
        // if so, return parts as an empty object
        this.$store.state.parts || {
          heads: [],
          arms: [],
          torsos: [],
          bases: []
        }
      );
    }
  }
};
