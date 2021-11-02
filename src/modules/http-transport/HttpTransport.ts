import queryStringify from '../../utils/queryStringify';

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type HTTPTransportRequestOptions<TData = any> = Partial<{
  data: TData;
  method: METHODS;
  timeout: number;
}>;

type Request = <TData extends object | BodyInit = Document | BodyInit>(
  url: string,
  options?: HTTPTransportRequestOptions<TData>
) => Promise<XMLHttpRequest>;

export class HttpTransport {
  static HOST = 'https://ya-praktikum.tech/';

  prefix = '';

  constructor(prefix: string = '') {
    this.prefix = prefix;
  }

  get: Request = (url, options = {}) => this.request(
    `${url}${queryStringify(options.data)}`, { ...options, method: METHODS.GET },
  );

  post: Request = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST });

  put: Request = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT });

  delete: Request = (url, options = {}) => this.request(
    url, { ...options, method: METHODS.DELETE },
  );

  request: Request = (url, options = {}) => {
    const { method = METHODS.GET, data, timeout = 5000 } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, [HttpTransport.HOST, this.prefix, url].filter(Boolean).join(''));

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as BodyInit);
      }
    });
  };
}
