<template>
    <div class="col-12 text-center mt-8">
        <h2 class="heading-secondary">You are {{ personality() }}</h2>
    </div>
</template>
<style>

</style>
<script>

export default {
  data () {
    return {
      score: this.$store.getters.score,
      personalityTrait: ''
    }
  },
  methods: {
    personality () {
      if (this.score >= 11) {
        this.personalityTrait = `Extroverted`
      } else if (this.score >= 3 && this.score <= 10) {
        this.personalityTrait = `MIXED (mostly Extrovert partially Introvert)`
      } else if (this.score <= -11) {
        this.personalityTrait = `Introverted`
      } else if (this.score <= 2 && this.score >= -2) {
        this.personalityTrait = `a mix of both Introvert and Extrovert`
      } else {
        this.personalityTrait = `MIXED (mostly Introvert partially Extrovert)`
      }
      return this.personalityTrait
    }
  }
}
</script>
