<template lang='pug'>
.h-screen.flex.flex-col
  header.flex-none.navbar.bg-neutral.text-neutral-content
    .navbar-start
      h1.text-lg.font-bold
        RouterLink(to='/') Marmalade

    .navbar-end
      UnlabelThemeChange

  main.flex-1.overflow-auto
    slot

  footer.flex-none.footer.footer-center.bg-neutral.text-neutral-content
    div
      p © Marmalade 2021
</template>

<script>
import UnlabelThemeChange from '@unlabel/vue/src/components/ThemeChange.vue'

export default {
  components: {
    UnlabelThemeChange
  }
}
</script>
