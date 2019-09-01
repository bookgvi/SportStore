<template>
  <div>
    <div
      v-for="p in products"
      :key="p.id"
      class="card m-1 p-1 bg-light">
      <h4>
        {{p.name}}
        <span class="badge badge-pill badge-primary float-right">
          {{ p.price }}
        </span>
      </h4>
      <div class="card-text bg-white p-1">{{ p.description }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style scoped>

</style>
