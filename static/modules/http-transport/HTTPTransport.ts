import queryStringify from "../../utils/queryStringify";

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
}>

type Request = <TData extends object | BodyInit = Document | BodyInit>(
    url: string,
    options?: HTTPTransportRequestOptions<TData>
) => Promise<XMLHttpRequest>

export default class HTTPTransport {
    get: Request = (url, options = {}) => {
        return this.request(`${url}${queryStringify(options.data)}`, {...options, method: METHODS.GET});
    };
    post: Request = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.POST});
    };
    put: Request = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT});
    };
    delete: Request = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE});
    };

    request: Request = (url, options = {}) => {
        const {method = METHODS.GET, data, timeout = 5000} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function() {
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
};
