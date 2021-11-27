<template lang='pug'>
  #app
    component(:is="layout")
      RouterView
</template>

<script>
import { themeChange } from 'theme-change'

const defaultLayout = 'Application'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + 'Layout'
    }
  },
  mounted () {
    themeChange(false)
  }
}
</script>
