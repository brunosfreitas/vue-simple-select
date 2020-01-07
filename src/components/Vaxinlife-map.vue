<template>
  <div class="vaxinlife-map container">
    <div class="row align-items-baseline">
      <!-- Jumbo -->
      <div class="col-12 col-lg-4 jumbotron bg-light rounded">
        <div class="form-group px-1">
          <label for="selectCountryVax" class="text-muted lead">{{selectCountryLabel}}</label>
          <!-- Select -->
          <select class="form-control shadow-sm" id="selectCountryVax" v-model="selectedCountry">
            <option v-for="(country, index) in coutriesOptions" :value="country" :key="index">{{country}}</option>
          </select>
          <!-- Select -->
        </div>
      </div>
      <!-- Jumbo -->

      <div class="col-12 offset-lg-1 col-lg-7">
        <!-- Infos -->
        <transition-group name="vaxinlife-map__list" tag="div" mode="out-in">
          <div v-for="infoCountry in selectedInfo" :key="infoCountry.country">
            <h1 class="text-muted pb-3 font-weight-light">{{infoCountry.country}}<sup class="text-black-50">{{referencesToString(infoCountry.references)}}</sup></h1>
            <VaxinlifeTable :data="infoCountry.diseases" :diseaseLabel="diseaseLabel" :transmissionLabel="transmissionLabel"></VaxinlifeTable>    
            <small>*{{observation}}</small>
          </div>

          <div v-if="!selectedInfo" key="no_selected_country">
            <h2 class="lead">{{emptySelectionLabel}}</h2>
          </div>
        </transition-group>
        <!-- Infos -->
      </div>
    </div>
  </div>
</template>

<script>

import infos_json from "../assets/diseases.es.json";
import VaxinlifeTable from "./Vaxinlife-table";

export default {
  name: "Vaxinlife-map",
  components: { VaxinlifeTable },
  props: {
    msg: String,
    selectCountryLabel: {
      type: String,
      default: "Pais"
    },
    emptySelectionLabel: {
      type: String, 
      default: 'Seleccione un país al lado para más información.'
    }
  },
  data() {
    return {
      selectedCountry: "",
      infos: infos_json.data,
      observation: infos_json.observation,
      diseaseLabel: infos_json.disease_label,
      transmissionLabel: infos_json.transmission_label
    };
  },
  computed: {
    selectedInfo: function() {
      // console.log(this.infos);
      let infos = this.infos || [];

      let selected = infos.filter(
        info => this.selectedCountry === info.country
      );
      return selected.length === 0 ? "" : selected;
    },
    coutriesOptions: function() {
      let infos = this.infos || [];

      let countries = infos.map(item => item.country).sort();
      return countries;
    }
  },
  methods: {
    selectedRateColor(rate) {
      return {
        "badge badge-pill badge-success": rate === "low",
        "badge badge-pill badge-warning": rate === "medium",
        "badge badge-pill badge-danger": rate === "high"
      };
    },
    referencesToString(references) {
      return references.toString();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vaxinlife-map__list-enter-active,
.vaxinlife-map__list-leave-active {
  transition: opacity 0.6s;
}

.vaxinlife-map__list-enter-active {
  transition-delay: 0.25s;
}

.vaxinlife-map__list-enter, .vaxinlife-map__list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: opacity 0.25s;
}
</style>
