import Api from '@/services/Api'

export default {
	register (credentials) {
		return Api().post('register', credentials)
	}
}


// you call it like this from another file:
// AuthenticationService.register({
// 	email: 'rachel@romee.com',
// 	password: 'yum'
// })
