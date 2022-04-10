<template>
  <div style="width: 100%; height: 400px">
    <q-input color="purple-12" v-model="what" :label="`${$t('what')}?`" :disable="disable">
      <template v-slot:prepend>
        <q-icon name="thing" />
      </template>
    </q-input>

    <q-input color="purple-12" v-model="when" :label="`${$t('when')}?`" :disable="disable">
      <template v-slot:prepend>
        <q-icon name="event" />
      </template>
    </q-input>

    <q-input color="purple-12" v-model="where" :label="`${$t('where')}?`" :disable="disable">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
    </q-input>

    <q-btn color="blue" icon-right="send" :label="$t('add')" @click="fire" :disable="disableButton" :loading="loading"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    disable: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      what: '',
      when: '',
      where: ''
    }
  },
  computed: {
    disableButton () {
      return !(this.what.trim() && this.when.trim() && this.where.trim()) || this.disable
    }
  },
  methods: {
    fire (){
      this.$emit('add', {
        what: this.what,
        when: this.when,
        where: this.where
      })
    },
    reset(){
      this.what = ''
      this.when = ''
      this.where = ''
    }
  }
})
</script>
