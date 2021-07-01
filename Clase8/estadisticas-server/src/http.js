const axios = require('axios')

module.exports = {
  endpoints: {
    USD_ENDPOINT: 'https://api.estadisticasbcra.com/usd',
    BASE_ENDPOINT: 'https://api.estadisticasbcra.com/base',
  },
  instance: axios.create({
      headers: {
        Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTY1NDk2NTcsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJwcmZzZWJhc3RpYW5sZWRlc21hQGdtYWlsLmNvbSJ9.L0691QlmLpLdLPyawONDn7QKqOGCKF3RE5Ok08lwaACvVVLMfYHGnWvBNdmmioHDUBnX4oqDN5LCoH00C3e1_g "
      }
    })
}