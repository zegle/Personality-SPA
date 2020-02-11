<template>
  <div class="wrapper">
    <transition appear="" enter-active-class="animated fadeIn">
      <div class="grid-12">
        <div class="col-12">
          <h1 class="text-center heading-primary">Personality Quiz</h1>
        </div>
        <transition mode="out-in" leave-active-class="animated fadeOutLeft fast">
          <div class="col-12" v-if="!quizStarted">
            <h2 class="heading-secondary-2 text-center">Find out if you are an</h2>
            <h2 class="heading-secondary text-center">Introvert <span class="dhide" style="font-size:0"><br></span>or<span class="dhide" style="font-size:0"><br></span> Extrovert</h2>
            <transition appear="" enter-active-class="animated bounceInUp delay-halfsec">
              <button class="btn btn-blue text-center mt-8" @click="init">Start Now</button>
            </transition>
          </div>
          <transition mode="out-in" enter-active-class="animated fadeInRight">
            <component :is="mode" @submitted="submitted($event)" @confirmed="mode = 'app-question'" v-if="quizStarted"></component>
          </transition>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import Question from './components/Question.vue'
import Result from './components/Result.vue'

export default {
  data () {
    return {
      mode: 'app-question',
      quizStarted: false
    }
  },
  methods: {
    init () {
      this.quizStarted = true
      console.log('clicked')
    },
    submitted (isTrue) {
      if (isTrue) {
        this.mode = 'app-result'
      } else {
        this.mode = 'app-question'
        alert('Wrong, try again!')
      }
    }
  },
  components: {
    appQuestion: Question,
    appResult: Result
  }
}
</script>

<style lang="scss">
@import '../public/style.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.delay-halfsec {
  animation-delay: .5s;
}
</style>
