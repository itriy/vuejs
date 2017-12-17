<template id="users-form">
  <form class="form-inline">
    <input type="text" name="" required class="form-control" v-model="newName" placeholder="name">
    <input type="number" name="" class="form-control" v-model="newAge" placeholder="age">
    <button type="button" class="btn btn-primary" @click="add()">OK</button>
  </form>
</template>

<script>
export default {
  name: 'UserAdd',
  template: '#users-form',

  data() {
    return {
      newName: '',
      newAge: ''
    };
  },

  methods: {
    add() {
      this.$emit('add-user', {
            name: this.newName,
            age: this.newAge
      });

      this.newName = '';
      this.newAge = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
