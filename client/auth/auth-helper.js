import { signout } from './api-auth.js'

const auth = {
  isAuthenticated() { //retrieve credentials if signed in
    if (typeof window == "undefined")
      return false

    if (sessionStorage.getItem('jwt'))
      return JSON.parse(sessionStorage.getItem('jwt'))
    else
      return false
  },
  authenticate(jwt, cb) { //save credentials on successful signin
    if (typeof window !== "undefined")
      sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
  },
  signout(cb) { //delete credentials and signout
    if (typeof window !== "undefined")
      sessionStorage.removeItem('jwt')
    cb()
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 2050 00:00:00 UTC; path=/;"
    })
  }
}

export default auth
