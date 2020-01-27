<template>
  <div id="app">
    hello world
    <div id="container">
      <div v-for="todo in todos" :key="todo.name">{{todo.name}}</div>
      <div>
        <img src="Mojave Night.jpg" />
      </div>
    </div>
    <button @click="getData">load todos</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { todos: [] };
  },
  mounted(){
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await fetch("http://localhost:3000/api/todos");
        if (response.status >= 400) {
          throw new Error("API not reachable!");
        }
        const data = await response.json();

      this.todos=data;

      } catch (error) {
        alert("Error: " + error);
      }
    }
  }
};
</script>

<style>
#container {
  display: flex;
  flex-direction: column;
}

#container div {
  background-color: aqua;
}

#container img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
