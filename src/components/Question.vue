<template>
  <div class="col-12 mr-5 ml-5">
    <div v-for="(question, index) in questions" :key="question.text">
      <div v-if="index === questionIndex">
        <h3 class="heading-tertiary text-center animated faster" :class="{fadeInRight:fade == true, fadeOutLeft:fade == false}">{{ question.text }}</h3>
        <div class="grid-10">
            <div class="col-2 col-10m col-10s text-center mt-4 animated " v-for="response in question.responses" :key="response.text">
                <label class="btn btn-radio" :class="{active:response.selected}" style="margin:10px"><input type="radio" :value="response.value" :name="index" v-model="userInput[index]" @click="$set(response, 'selected', !response.selected)"> {{response.text}}</label>
            </div>
        </div>
      </div>
    </div>
    <div class="flex-container animated fadeIn delay-1s">
        <p class="text-center" v-show="questionIndex <= questions.length - 1">Question: {{ questionIndex + 1 }} of {{ questions.length }}</p>
        <buttton class="btn btn-small" :class="{hide:hideClass == true}" @click="prev">Prev</buttton>
        <buttton class="btn btn-small" :class="{hide:hideClass == false}" @click="next">Next</buttton>
    </div>
    <div v-if="questionIndex >= questions.length" class="animated" :class="{fadeIn:fade == true, fadeOut:fade == false}">
      <button class="btn btn-blue mt-8" @click="onSubmit(true)">Submit Answers</button>
    </div>
  </div>
</template>

<style>
  .delay-fourth {
    animation-delay: .25s;
  }
</style>

<script>
export default {
  data () {
    return {
      fade: true,
      hideClass: true,
      selected: undefined,
      questionIndex: 0,
      userInput: [],
      questions: [{
        text: 'I find it difficult to introduce myself to people?',
        responses: [{
          text: 'Strongly Agree',
          value: -3
        },
        {
          text: 'Agree',
          value: -1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: 1
        },
        {
          text: 'Strongly Disagree',
          value: 3
        }
        ]
      },
      {
        text: 'I do not usually initiate conversations?',
        responses: [{
          text: 'Strongly Agree',
          value: -3
        },
        {
          text: 'Agree',
          value: -1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: 1
        },
        {
          text: 'Strongly Disagree',
          value: 3
        }
        ]
      },
      {
        text: 'I am usually highly motivated and energetic?',
        responses: [{
          text: 'Strongly Agree',
          value: 3
        },
        {
          text: 'Agree',
          value: 1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: -1
        },
        {
          text: 'Strongly Disagree',
          value: -3
        }
        ]
      },
      {
        text: 'I choose my friends carefully?',
        responses: [{
          text: 'Strongly Agree',
          value: -3
        },
        {
          text: 'Agree',
          value: -1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: 1
        },
        {
          text: 'Strongly Disagree',
          value: 3
        }
        ]
      },
      {
        text: 'Being adaptable is more important than being organized?',
        responses: [{
          text: 'Strongly Agree',
          value: 3
        },
        {
          text: 'Agree',
          value: 1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: -1
        },
        {
          text: 'Strongly Disagree',
          value: -3
        }
        ]
      },
      {
        text: 'I find it difficult to tell stories about myself?',
        responses: [{
          text: 'Strongly Agree',
          value: -3
        },
        {
          text: 'Agree',
          value: -1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: 1
        },
        {
          text: 'Strongly Disagree',
          value: 3
        }
        ]
      },
      {
        text: 'I often do not feel I have to justify myself to people?',
        responses: [{
          text: 'Strongly Agree',
          value: 3
        },
        {
          text: 'Agree',
          value: 1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: -1
        },
        {
          text: 'Strongly Disagree',
          value: -3
        }
        ]
      },
      {
        text: 'I find it easy to walk up to a group of people and join in conversation?',
        responses: [{
          text: 'Strongly Agree',
          value: 3
        },
        {
          text: 'Agree',
          value: 1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: -1
        },
        {
          text: 'Strongly Disagree',
          value: -3
        }
        ]
      },
      {
        text: 'I would rather improvise than spend time coming up with a detailed plan?',
        responses: [{
          text: 'Strongly Agree',
          value: 3
        },
        {
          text: 'Agree',
          value: 1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: -1
        },
        {
          text: 'Strongly Disagree',
          value: -3
        }
        ]
      },
      {
        text: 'I prefer not to engage with people who seem angry or upset?',
        responses: [{
          text: 'Strongly Agree',
          value: -3
        },
        {
          text: 'Agree',
          value: -1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: 1
        },
        {
          text: 'Strongly Disagree',
          value: 3
        }
        ]
      },
      {
        text: 'I care more about making sure no one gets upset than winning a debate?',
        responses: [{
          text: 'Strongly Agree',
          value: -3
        },
        {
          text: 'Agree',
          value: -1
        },
        {
          text: 'Neutral',
          value: 0
        },
        {
          text: 'Disagree',
          value: 1
        },
        {
          text: 'Strongly Disagree',
          value: 3
        }
        ]
      }
      ]

    }
  },
  computed: {
    btnActive () {
      return {
        'active': this.active,
        '': !this.active
      }
    }
  },
  methods: {
    // Go to next question
    next () {
      // changes question and triggers fade in new question
      if (this.questionIndex !== this.questions.length) {
        // triggers fade out animation on question
        this.fade = false
        this.hideClass = undefined
        setTimeout(() => {
          this.questionIndex++
          this.fade = true
        }, 300)
      }

      // Hides the next button at the end of the quiz
      setTimeout(() => {
        if (this.questionIndex >= 11) {
          this.hideClass = false
          this.questionIndex = 11
        }
      }, 300)
    },
    // Go to previous question
    prev () {
      if (this.questionIndex !== 0) {
        this.fade = false
        this.hideClass = undefined
        this.questionIndex--
        setTimeout(() => {
          this.fade = true
        }, 300)
      }

      // Hides the prev button if question is the first question
      if (this.questionIndex < 1 && this.questionIndex === 0) {
        this.hideClass = true
      }
    },
    onSubmit (isCorrect) {
      this.$emit('submitted', isCorrect)
      let score = 0
      score = this.userInput.reduce((a, b) => a + b, 0)
      return this.$store.dispatch('updateScore', score)
    }

  }
}
</script>
