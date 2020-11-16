import { inject } from 'vue'

export function useHttp () {
  return inject('axios')
}
