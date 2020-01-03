<template>
  <div class="vaxinlife-map container">
    <div class="row align-items-baseline">
      <!-- Jumbo -->
      <div class="col-12 col-lg-4 jumbotron bg-light rounded">
        <div class="form-group px-1">
          <label for="selectCountryVax" class="text-muted lead">País</label>
          <!-- Select -->
          <select class="form-control shadow-sm" id="selectCountryVax" v-model="selectedCountry">
            <option v-for="(country, index) in options" :value="country" :key="index">{{country}}</option>
          </select>
          <!-- Select -->
        </div>
      </div>
      <!-- Jumbo -->

      <div class="col-12 offset-lg-1 col-lg-7">
        <!-- Infos -->
        <transition-group name="vaxinlife-map__list" tag="div" mode="out-in">
          <div v-for="infoCountry in selectedInfo" :key="infoCountry.country">
            <h1 class="text-muted pb-3 font-weight-light">{{infoCountry.country}}</h1>

            <template v-for="disease in infoCountry.diseases">
              <div :key="disease.name" class="pb-3">
                <span :class="selectedRateColor(disease.rate)">{{disease.rate}}</span>
                <p class="lead">{{disease.name}}</p>
                <p>{{disease.info}}</p>
              </div>
            </template>
          </div>
        </transition-group>
        <!-- Infos -->
      </div>
    </div>
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
          diseases: [
            {
              rate: "low",
              name: "Et pariatur enim mollit dolore.",
              info: "Ad eu duis irure ad."
            }
          ]
        },
        {
          country: "Argentina",
          rate: 'medium',
          diseases: [
            {
              rate: "medium",
              name:
                "Laborum reprehenderit dolor ut cillum duis nulla ut nisi.",
              info:
                "Veniam Lorem sit aute labore nostrud exercitation consequat anim ipsum sit dolor anim aliquip."
            },
            {
              rate: "medium",
              name: "Sint voluptate ipsum",
              info:
                "Fugiat cupidatat sunt dolor sunt amet fugiat labore sint et deserunt quis."
            },
            {
              rate: "high",
              name: "Eiusmod aliquip proident elit deserunt cillum.",
              info:
                "Tempor ipsum reprehenderit proident ex laborum sunt incididunt non veniam dolor irure duis."
            }
          ]
        },
        {
          country: "Chile",
          rate: 'high',
          diseases: [
            {
              rate: "high",
              name: "Ex in laboris ipsum",
              info:
                "Cupidatat aliquip tempor eiusmod proident in occaecat magna aliquip pariatur voluptate pariatur reprehenderit."
            }
          ]
        }
      ],
      selectedCountry: ""
    };
  },
  computed: {
    selectedInfo: function() {
      // console.log(this.infos);
      let infos = this.infos;

      let selected = infos.filter(
        info => this.selectedCountry === info.country
      );
      return selected.length === 0 ? "" : selected;
    }
  },
  methods: {
    selectedRateColor(rate) {
      return {
        "badge badge-pill badge-success": rate === "low",
        "badge badge-pill badge-warning": rate === "medium",
        "badge badge-pill badge-danger": rate === "high"
      };
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
