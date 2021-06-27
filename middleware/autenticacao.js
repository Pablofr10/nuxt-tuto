export default function ({ $axios, redirect }) {
  return $axios
    .$post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    })
    .then((res) => {
      if (res.token !== 'QpwL5tke4Pnpja7X4') {
        redirect('/')
      }
    })
}
