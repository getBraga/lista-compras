export default function tokenExpirado(request) {
  if (request === 'Auth token is expired') {
    request = 'O token do usuário atual expirou.'
    window.localStorage.accessToken = ''
    window.localStorage.uid = ''
    window.location.reload()
  }
  return request
}
