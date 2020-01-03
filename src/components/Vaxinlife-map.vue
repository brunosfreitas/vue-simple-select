<template>
  <div class="vaxinlife-map">
    <h1>WIP</h1>
    <select v-model="selectedCountry">
      <option v-for="(country, index) in options" :value="country" :key="index">{{country}}</option>
    </select>

    <template v-for='(infoCountry, index) in selectedInfo'>
      <div :key="index">
        <p>{{infoCountry.info}}</p>
        <i>{{infoCountry.rate}}</i>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Vaxinlife-map",
  props: {
    msg: String
  },
  data() {
    return {
      options: ["Brasil", "Argentina", "Chile"],
      infos: [
        {
          country: "Brasil",
          rate: 'low',
          info: "Ad eu duis irure ad."
        },
        {
          country: "Argentina",
          rate: 'medium',
          info:
            "Veniam Lorem sit aute labore nostrud exercitation consequat anim ipsum sit dolor anim aliquip."
        },
        {
          country: "Chile",
          rate: 'high',
          info:
            "Cupidatat aliquip tempor eiusmod proident in occaecat magna aliquip pariatur voluptate pariatur reprehenderit."
        }
      ],
      selectedCountry: ""
    };
  },
  computed: {
    selectedInfo: function() {
      // console.log(this.infos);
      let infos = this.infos;

      let selected = infos.filter(info => this.selectedCountry === info.country);
      return selected.length === 0 ? '' : selected;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
