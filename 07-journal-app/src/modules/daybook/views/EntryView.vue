<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
      </div>
      <div>
        <button class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="¿Qué sucedió hoy?"></textarea>
    </div>
  </template>
  <FavoriteActionButton icon="fa-save" />
  <img
    src="https://images.pexels.com/photos/16222199/pexels-photo-16222199/free-photo-of-ciudad-barcos-canal-urbano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="entry-picture"
    class="thumbnail"
  >
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';

import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  components: {
    FavoriteActionButton: defineAsyncComponent(() => import('../components/FavoriteActionButton.vue'))
  },
  data() {
    return {
      entry: null
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    day() {
      const { day } = getDayMonthYear(this.entry.date)
      return day
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date)
      return month
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date)
      return yearDay
    }
  },
  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id)
      entry(this.id)

      if ( !entry ) return this.$router.push({ name: 'no-entry' })

      this.entry = entry
    }
  },
  created() {
    this.loadEntry()
  },
  watch: {
    id() {
      this.loadEntry()
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>