<template>
  <ul class=" pagination">
    <li class="page-item" ><a class='page-link' @click="quantity(5)" href="#">5</a></li>
    <li class="page-item" ><a class='page-link' @click="quantity(10)" href="#">10</a></li>
    <li class="page-item" ><a class='page-link' @click="quantity(-1)" href="#">all</a></li>
  </ul>
</template>

<script>
export default {
  name: 'UserListQuantity',
  methods: {
    quantity(value){
      this.$emit('users-quantity', value);
    }
  }
}
</script>
