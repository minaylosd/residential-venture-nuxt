import { ref } from 'vue'

const callback = ref(null)


const closeLastDropdown = () => {
  if (callback.value === null) return

  callback.value()
}
const registerCloseCallback = (closeCallback) => {
  callback.value = closeCallback
}



export const useDropDownInputCloseSync = () => {

  return {
    registerCloseCallback,
    closeLastDropdown
  }
}
