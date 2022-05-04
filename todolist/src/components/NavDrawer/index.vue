<template>
  <div>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          link
          @click="goPath(item.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </div>
</template>

<script>

export default {
    data () {
        return {
            navItems: this.$router.options.routes[0].children
        }
    },
    methods: {
        goPath(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style>

</style>