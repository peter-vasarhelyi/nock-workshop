'use strict';

const axios = require('axios').default;
const nock = require('nock');
const { expect } = require('chai');

describe('advanced request mocking', () => {
    const baseUrl = 'http://emarsys.com';
    const path = '/test';

    describe('GET requests', () => {
        it('should mock dynamically generated URLs', async () => {
            // const scope = ;

            const response = await axios({ method: 'GET', baseURL: baseUrl, url: `${path}-${Math.random()}` });
            expect(response).to.have.status(202);
            expect(response.data).to.eql({ test: 'body' });

            // scope.done();
        });

        it('should mock GET requests with dynamically generated query string', async () => {
            // const scope = ;

            const response = await axios({ method: 'GET', baseURL: baseUrl, url: path, params: { hello: `emarsys-${Math.random()}` } });
            expect(response).to.have.status(202);
            expect(response.data).to.eql({ test: 'body' });

            // scope.done();
        });
    });

    describe('POST requests', () => {
        it('should mock POST requests with dynamically generated header value', async () => {
            // const scope = ;

            const response = await axios({ method: 'POST', baseURL: baseUrl, url: path, headers: { 'random-header': Math.random() } });
            expect(response).to.have.status(202);
            expect(response.data).to.eql({ test: 'body' });

            // scope.done();
        });
    });
});
