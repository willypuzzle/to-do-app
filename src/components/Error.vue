<template>
  <div v-if="active">
    <q-chip dense size="md" icon="bookmark">
      {{ $t('failed') }}
    </q-chip>
    <q-btn color="red" icon-right="send" :label="$t('try_again')" @click="$emit('retry')"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
})
</script>
