<template>
  <router-view></router-view>
</template>

<script>
import { useHttp } from '@/utils/http'

export default {
  name: 'main',
  setup () {
    const http = useHttp()
    const getUserInfo = () => http({
      url: http.adornUrl('/sys/user/info'),
      method: 'get',
      params: ''
    })

    getUserInfo().then(data => {
      console.log(data)
    })
  }
}
</script>

<style scoped>

</style>
