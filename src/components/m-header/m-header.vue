<template>
  <div class="m-header">
    <div class="changeLanguage" @click="changeLanguage">中文</div>
    <h1 class="text">Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>   

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    methods: {
      changeLanguage () {
        // this.$confirm('确定要切换吗？', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {

        // }).catch(() => {

        // })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .changeLanguage
      display: inline-block
      vertical-align: top
      line-height: 44px
      float: left 
      position: absolute
      left: 20px
      font-size: $font-size-small
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>