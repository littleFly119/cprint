<template>
  <div>login</div>
</template>
  <script>
import {getAuthTokenApi} from "@/api/index.js"
export default{
  created(){
    getAuthTokenApi()
  }
}
</script>
  <style lang="less">
</style>
  