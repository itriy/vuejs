<template>
  <div>
    <h2>Список пользователей</h2>

    <user-list-quantity @users-quantity="usersQuantity"></user-list-quantity>
    <user-list v-if="users.length" :users="users" @remove-user="removeUser" :quantity='listQuantity'></user-list>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList'
import UserListQuantity from '@/components/UserListQuantity'

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList,
    'user-list-quantity': UserListQuantity
  },
  data: function() {
    return {
      users: [],
      listQuantity: -1
    };
  },
  methods: {
    loadData: function() {
      axios.get('http://localhost:3004/users')
        .then((response) => {
          this.users = response.data;
        })
    },
    removeUser(id) {
      this.users = this.users.filter(item => item._id !== id);
    },
    usersQuantity(value) {
      this.listQuantity = value;
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
