"use-client"

import createWebStorage from "redux-persist/lib/storage/createWebStorage"

const isServer = () => typeof window === "undefined"

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}

const storage = !isServer() ? createWebStorage("local") : createNoopStorage()

export default storage
