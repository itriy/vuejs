<template>
  <ul class=" pagination">
    <li class="page-item" ><span class='page-link' @click="quantity(5)">5</span></li>
    <li class="page-item" ><span class='page-link' @click="quantity(10)">10</span></li>
    <li class="page-item" ><span class='page-link' @click="quantity(-1)">all</span></li>
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
