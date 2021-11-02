import { BaseApi } from './base.api';
import { HttpTransport } from '../modules/http-transport/HttpTransport';

const authApiInstance = new HttpTransport('api/v2/auth');

export class AuthApi extends BaseApi {
  request() {
    authApiInstance.get('/user').then((data) => {
      console.log('data', data);
    });
  }

  create() {
    authApiInstance.post('/signup', {
      data: {
        login: 'Y.P',
        password: 'p@ssw0rd',
      },
    }).then((data) => {
      console.log('data', data);
    });
  }

  update() {
    authApiInstance.post('/signin', {
      data: {
        first_name: 'Y',
        second_name: 'P',
        login: 'Y.P',
        email: 'Y.P@rdr.com',
        phone: '+71234567890',
        password: 'p@ssw0rd', // Грустный и слабый пароль, можно вот так: oPKzos*1X$uKz$ta
      },
    }).then((data) => {
      console.log('data', data);
    });
  }

  delete() {
    authApiInstance.post('/logout').then((data) => {
      console.log('data', data);
    });
  }
}
