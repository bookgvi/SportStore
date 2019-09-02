<template>
  <div>
    <div
      v-for="p in products"
      :key="p.id"
      class="card m-1 p-1 bg-light">
      <h4>
        {{p.name}}
        <span class="badge badge-pill badge-primary float-right">
          {{ p.price | currency }}
        </span>
      </h4>
      <div class="card-text bg-white p-1">{{ p.description }}</div>
    </div>
    <page-controls />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageControls from '@/components/PageControls'
export default {
  components: {
    PageControls
  },
  computed: {
    ...mapGetters({
      products: 'processProducts'
    })
  },
  filters: {
    currency (value) {
      return new Intl.NumberFormat('ru-Ru', { style: 'currency', currency: 'RUB' }).format(value)
    }
  }
}
</script>

<style scoped>

</style>
