import { spy } from "sinon";
import { assert } from "chai";

import HTTPTransport, {METHODS} from "./HTTPTransport";
import queryStringify from "../../utils/queryStringify";

describe('Test HTTPTransport module', () => {
    function createHTTPTransport(): HTTPTransport {
        return new HTTPTransport()
    }

    it('Method get must call request method with same method name', () => {
        const httpTransport = createHTTPTransport();

        const spiedMethod = spy(httpTransport, 'get');
        const spiedRequest = spy(httpTransport, 'request');

        const requestUrl = '/'
        httpTransport.get(requestUrl)

        assert.isTrue(spiedMethod.calledOnce);
        assert.isTrue(spiedRequest.calledAfter(spiedMethod))
        assert.isTrue(spiedRequest.calledOnceWith(requestUrl, {method: METHODS.GET}))
    })

    it('In get request url must be query params if exist data', () => {
        const httpTransport = createHTTPTransport();

        const spiedGet = spy(httpTransport, 'get');
        const spiedRequest = spy(httpTransport, 'request');

        const requestUrl = '/';
        const data = {testParam: 1}
        httpTransport.get(requestUrl, { data })

        assert.isTrue(spiedGet.calledOnce);
        assert.isTrue(spiedRequest.calledAfter(spiedGet))
        assert.isTrue(spiedRequest.calledOnceWith(`${requestUrl}${queryStringify(data)}`))
    })

    it('Method post must call request method with same method name', () => {
        const httpTransport = createHTTPTransport();

        const spiedMethod = spy(httpTransport, 'post');
        const spiedRequest = spy(httpTransport, 'request');

        const requestUrl = '/'
        httpTransport.post(requestUrl)

        assert.isTrue(spiedMethod.calledOnce);
        assert.isTrue(spiedRequest.calledAfter(spiedMethod))
        assert.isTrue(spiedRequest.calledOnceWith(requestUrl, {method: METHODS.POST}))
    })

    it('Method put must call request method with same method name', () => {
        const httpTransport = createHTTPTransport();

        const spiedMethod = spy(httpTransport, 'put');
        const spiedRequest = spy(httpTransport, 'request');

        const requestUrl = '/'
        httpTransport.put(requestUrl)

        assert.isTrue(spiedMethod.calledOnce);
        assert.isTrue(spiedRequest.calledAfter(spiedMethod))
        assert.isTrue(spiedRequest.calledOnceWith(requestUrl, {method: METHODS.PUT}))
    })

    it('Method delete must call request method with same method name', () => {
        const httpTransport = createHTTPTransport();

        const spiedMethod = spy(httpTransport, 'delete');
        const spiedRequest = spy(httpTransport, 'request');

        const requestUrl = '/'
        httpTransport.delete(requestUrl)

        assert.isTrue(spiedMethod.calledOnce);
        assert.isTrue(spiedRequest.calledAfter(spiedMethod))
        assert.isTrue(spiedRequest.calledOnceWith(requestUrl, {method: METHODS.DELETE}))
    })
})
