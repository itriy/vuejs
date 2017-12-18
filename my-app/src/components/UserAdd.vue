<template>
  <user-form @add-user="addUser"></user-form>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm'

export default {
  name: 'UserAdd',
  components: {
    'user-form': UserForm
  },

  data() {
    return {
      users: []
    };
  },

  methods: {
    loadData: function() {
      axios.get('http://localhost:3004/users')
        .then((response) => {
          this.users = response.data;
        })
    },

    addUser(newUser){
      this.users.push(newUser);
      console.log(this.users)
    },
  },

  mounted: function () {
    this.loadData();
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
