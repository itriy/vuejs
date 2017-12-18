<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Влзраст</th>
        <th>Email</th>
        <th>Пол</th>
        <th>Инфо</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredUsers" :key="item._id">
        <td>{{ item.index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.gender }}</td>
        <td>{{ item.about }}</td>
        <td>
          <button type="button" class="btn btn-danger" @click="remove(item._id)">
              X
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="8">
          Всего пользователей: {{ total }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'UsersList',
  props: {
    users: {
      type: Array,
      required: true
    },
    quantity: {
      type: Number
    }
  },
  methods: {
    remove(name) {
      this.$emit('remove-user', name);
    }
  },
  computed: {
    total: function() {
      return this.users.length;
    },
    
    filteredUsers: function () {

      if (this.quantity === -1) {
        return this.users
      } else {
        return this.users.slice(0, this.quantity)
      }

      
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
