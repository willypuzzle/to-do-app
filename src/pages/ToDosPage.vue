<template>
  <q-page class="flex flex-column flex-start">
    <Error :active="error" @retry="retry"/>
    <template v-if="!error">
      <Form ref="form" :loading="loading" :disable="disable" @add="add"/>
      <div class="flex flex-column wrap full-width justify-start">
        <ToDo v-for="todo in todos" :form="todo" @delete="deleteTodo" :loading="loading" :key="todo.id"/>
      </div>
    </template>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Error from "components/Error";
import Form from "components/Form";
import ToDo from "components/ToDo";
import _ from 'lodash'

export default defineComponent({
  name: 'ToDosPage',
  components: {
    Error,
    Form,
    ToDo
  },
  data(){
    return {
      todos: [],
      error: false,
      last_action: null,
      last_parameters: null,
      loading: false,
      disable: false
    }
  },
  created() {
    this.getTodos()
  },
  methods: {
    async getTodos(){
      const callback = async () => {
        const data = await this.$api.get('/todos')
        this.todos = data.data
      }

      await this.action(callback)
    },
    retry(){
      this.error = false
      this.last_action(...this.last_parameters)
    },
    async add({when, where, what}){
      const callback = async () => {
        const data = await this.$api.post('/todos',{when, where, what})
        this.$refs.form.reset()
        this.todos.push(data.data)
      }
      await this.action(callback)
    },
    async deleteTodo({id}){
      const callback = async () => {
        await this.$api.delete(`/todos/${id}`)
        this.todos = _.filter(this.todos, todo => todo.id !== id)
      }

      await this.action(callback)
    },
    /**
     * This method manages errors handling and loading flag
     * */
    async action(callback){
      this.last_action = this.action
      this.last_parameters = [callback]
      try{
        this.loading = true
        await callback()
      }catch (e) {
        this.error = true
      }
      this.loading = false
    }
  }
})
</script>
