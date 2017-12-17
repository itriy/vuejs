<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Пол</th>
        <th>Инфо</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" v-bind:key="item.id">
        <td>{{ item.index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.balance }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.gender }}</td>
        <td>{{ item.about }}</td>
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
  name: 'UsersTable',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    total: function() {
      return this.users.length;
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
