<template>
  <div>
    <h2>Список пользователей</h2>

    <user-list v-if="users.length" v-bind:users="users"></user-list>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList'

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList
  },
  data: function() {
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
    }
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
