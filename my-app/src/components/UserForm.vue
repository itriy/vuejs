<template>
  <form class="form-inline">
    <input type="text" name="" required class="form-control" v-model="newName" placeholder="name">
    <input type="number" name="" class="form-control" v-model="newAge" placeholder="age">
    <input type="email" name="" class="form-control" v-model="newEmail" placeholder="email">
    <input type="text" name="" class="form-control" v-model="newGender" placeholder="gender">
    <input type="text" name="" class="form-control" v-model="newAbout" placeholder="about">
    <button type="button" class="btn btn-primary" @click="add()">OK</button>
  </form>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      newName: '',
      newAge: '',
      newEmail: '',
      newGender: '',
      newAbout: ''
    }
  },

  methods: {
    add() {
      this.$emit('add-user', {
            name: this.newName,
            age: this.newAge,
            email: this.newEmail,
            gender: this.newGender,
            about: this.newAbout,
      });

      this.newName = '';
      this.newAge = '';
      this.newEmail = '';
      this.newGender = '';
      this.newAbout = '';
    }
  }
}
</script>