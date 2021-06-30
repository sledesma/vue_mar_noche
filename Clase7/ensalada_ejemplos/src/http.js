import axios from 'axios'

export default axios.create({
  headers: {
    Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTY1NDk2NTcsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJwcmZzZWJhc3RpYW5sZWRlc21hQGdtYWlsLmNvbSJ9.L0691QlmLpLdLPyawONDn7QKqOGCKF3RE5Ok08lwaACvVVLMfYHGnWvBNdmmioHDUBnX4oqDN5LCoH00C3e1_g "
  }
})

export const USD_ENDPOINT = 'https://api.estadisticasbcra.com/usd';
export const BASE_ENDPOINT = 'https://api.estadisticasbcra.com/base';