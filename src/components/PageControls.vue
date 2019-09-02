<template>
  <div class="">
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
      'setCurrentPage'
    ])
  },
}
</script>

<style scoped>

</style>
