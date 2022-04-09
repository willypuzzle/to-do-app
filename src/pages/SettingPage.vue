<style scoped>
  .min-width {
    min-width: 200px;
  }
</style>

<template>
  <q-page class="flex">
    <q-select
      ref="language"
      filled
      class="min-width"
      v-model="locale"
      :options="options"
      :label="$t('settings.languages.select.label')"
      emit-value
      map-options
      stack-label
      dense
      options-dense />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import localStorageManager from "src/libraries/local-storage-manager";
import _ from 'lodash'
import EventBus, {EVENT_LANGUAGE_CHANGE} from "src/libraries/event-bus";

const EN_US= 'en-US'
const IT = 'IT'
const LANGUAGE_KEY = 'locale.language'

export default defineComponent({
  name: 'SettingPage',
  data() {
    return {
      locale: null,
      options: [
        {
          label: '',
          key: 'settings.languages.select.options.english',
          value: EN_US
        },
        {
          label: '',
          key: 'settings.languages.select.options.italian',
          value: IT
        }
      ]
    }
  },
  created() {
    this.locale = this.getCurrentLocale()
    this.refreshOptions()
  },
  methods: {
    getCurrentLocale(){
      return localStorageManager.get(LANGUAGE_KEY, IT)
    },
    setCurrentLocale(value){
      localStorageManager.set(LANGUAGE_KEY, value)
    },
    refreshOptions(){
      this.options = this.options.map((o) => {
        const option = _.clone(o)
        option.label = this.$i18n.t(option.key)
        return option
      })
    }
  },
  watch:{
    locale (value) {
      this.$i18n.locale = value
      this.setCurrentLocale(value)
      this.refreshOptions()
      EventBus.emit(EVENT_LANGUAGE_CHANGE)
    }
  }
})
</script>
