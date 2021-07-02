const axios = require('axios')

// es el 'export default' nativo de Node
module.exports = {
  endpoints: {
    USD_ENDPOINT: 'https://api.estadisticasbcra.com/usd',
    BASE_ENDPOINT: 'https://api.estadisticasbcra.com/base',
  },
  instance: axios.create({
    headers: {
      Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTY3MTgwODAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJwcmZzZWJhc3RpYW5sZWRlc21hQGdtYWlsLmNvbSJ9.yjvq7Ary50C9ucAAnu-KqdYN1ruxZggr9dk94if7o06QXucS04hvGHd_3eR1FoNOWVwR6p-NYYo6gZJgpWgkSw"
    }
  })
}