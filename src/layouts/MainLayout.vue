<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ $t('toolbar.label') }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          {{ $t('menu.label')}}
        </q-item-label>

        <template v-if="essentialLinks">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import _ from 'lodash'
import eventBus, {EVENT_LANGUAGE_CHANGE} from "src/libraries/event-bus";

const linksList = [
  {
    title: '',
    title_key: 'layout.links.home.title',
    caption: '',
    caption_key: 'layout.links.home.caption',
    icon: 'home',
    to: 'home'
  },
  {
    title: '',
    title_key: 'layout.links.settings.title',
    caption: '',
    caption_key: 'layout.links.settings.caption',
    icon: 'settings',
    to: 'settings'
  },
  {
    title: '',
    title_key: 'layout.links.todos.title',
    caption: '',
    caption_key: 'layout.links.todos.caption',
    icon: 'event',
    to: 'todos'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const vm = getCurrentInstance();
    const essentialLinks = ref(false);

    const languageSet = () => {
      essentialLinks.value = _.map(linksList, (l) => {
        const link = _.clone(l)
        link.title = vm.ctx.$i18n.t(link.title_key)
        link.caption = vm.ctx.$i18n.t(link.caption_key)
        return link
      })
    }

    setTimeout(languageSet)

    eventBus.on(EVENT_LANGUAGE_CHANGE, languageSet)

    return {
      essentialLinks,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
