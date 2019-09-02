<template>
  <div class="row mt-2">
    <div class="col form-group">
      <select @click="chPageSize" class="form-control">
        <option value="4">4 on page</option>
        <option value="8">8 on page</option>
        <option value="12">12 on page</option>
      </select>
    </div>
    <div class="col text-right">
      <div class="btn-group">
        <button
          v-for="i in pageCount"
          :key="i"
          @click="setCurrentPage(i)"
          class="btn"
          :class="{ 'btn-primary': i === currentPage, 'btn-outline-primary': i !== currentPage }"
        >
          {{ i }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState([
      'currentPage'
    ]),
    ...mapGetters([
      'pageCount'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentPage',
      'setPageSize'
    ]),
    chPageSize (e) {
      this.setPageSize(+e.target.value)
    }
  }
}
</script>

<style scoped>
</style>
