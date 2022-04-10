<template>
  <div style="width: 100%; border: 1px solid black" class="flex flex-row flex-justify-content-space-between">
    <q-chip dense size="md" icon="thing">
      {{ $t('id') }}: {{ form.id }}
    </q-chip>
    <q-chip dense size="md" icon="thing">
      {{ $t('what') }}: {{ form.what }}
    </q-chip>
    <q-chip dense size="md" icon="event">
      {{ $t('when') }}: {{ form.when }}
    </q-chip>
    <q-chip dense size="md" icon="place">
      {{ $t('where') }}: {{ form.where }}
    </q-chip>
    <q-btn color="red" icon-right="send" :label="$t('delete')" @click="deleteEntry" :loading="loading"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    form: {
      type: Object,
      required: true
    },
    loading: {
      type:Boolean,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    deleteEntry(){
      this.$emit('delete', {id: this.form.id})
    }
  }
})
</script>
