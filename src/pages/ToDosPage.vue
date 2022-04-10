<template>
  <q-page class="flex flex-column flex-start">
    <Error :active="error" @retry="retry"/>
    <template v-if="!error">
      <Form ref="form" :loading="loading" :disable="disable" @add="add"/>
      <div class="flex flex-column wrap full-width justify-start">
        <ToDo v-for="todo in todos" :form="todo" @delete="deleteTodo" :key="todo.id"/>
      </div>
    </template>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Error from "components/Error";
import Form from "components/Form";
import ToDo from "components/ToDo";

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
      this.last_action = this.getTodos
      this.last_parameters = []
      try {
        this.loading = true
        const data = await this.$api.get('/todos')
        this.todos = data.data
      }catch (e){
        this.error = true
      }
      this.loading = false
    },
    retry(){
      this.error = false
      this.last_action(...this.last_parameters)
    },
    async add({when, where, what}){
      this.last_action = this.add
      this.last_parameters = [{when, where, what}]
      try{
        this.loading = true
        const data = await this.$api.post('/todos',{when, where, what})
        this.todos.push(data.data)
      }catch (e) {
        this.error = true
      }
      this.loading = false
    },
    async deleteTodo({id}){
      //TODO
    }
  }
})
</script>
