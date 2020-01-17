<template>
  <div id="app">
    hello world
    <div id="container">
      <div>Stativ</div>
      <div>Erdbeeren</div>
      <div>Brot</div>
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
  methods: {
    async getData() {
      try {
        const response = await fetch("http://localhost:3000/api/todos");
        if (response.status >= 400) {
          throw new Error("API not reachable!");
        }
        const data = await response.json();

        data.forEach(element => {
          const newDiv = document.createElement("div");
          const newContent = document.createTextNode(element.name);
          newDiv.appendChild(newContent);
          document.getElementById("container").appendChild(newDiv);
        });
      } catch (error) {
        
        alert("Error: " + error);
      }
    }
  }
};
</script>

<style>

</style>
