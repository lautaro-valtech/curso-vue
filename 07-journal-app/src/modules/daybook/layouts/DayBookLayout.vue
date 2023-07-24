<template>
  <AppNavbar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    AppNavbar: defineAsyncComponent(() => import(/* webpackChunkName: "AppNavbar" */ '../components/AppNavbar.vue')),
    EntryList: defineAsyncComponent(() => import(/* webpackChunkName: "EntryList" */ '../components/EntryList.vue')),
  }
}
</script>
