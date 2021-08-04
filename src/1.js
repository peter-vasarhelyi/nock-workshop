'use strict';

const axios = require('axios').default;
const nock = require('nock');
const { expect } = require('chai');

describe('simple request mocking', () => {
    const baseUrl = 'http://emarsys.com';
    const path = '/test';

    describe('GET requests', () => {
        it('should mock basic GET requests', async () => {
            const scope = nock(baseUrl).get(path).reply(202, { test: 'body' });

            const response = await axios({ method: 'GET', baseURL: baseUrl, url: path });
            expect(response).to.have.status(202);
            expect(response.data).to.eql({ test: 'body' });

            scope.done();
        });

        it('should mock GET requests with query string', async () => {
            const scope = nock(baseUrl).get(path).query({ hello: 'emarsys' }).reply(202, { test: 'body' });

            const response = await axios({ method: 'GET', baseURL: baseUrl, url: path, params: { hello: 'emarsys' } });
            expect(response).to.have.status(202);
            expect(response.data).to.eql({ test: 'body' });

            scope.done();
        });
    });

    describe('POST requests', () => {
        it('should mock basic POST requests', async () => {
            const scope = nock(baseUrl).post(path).reply(202, { test: 'body' });

            const response = await axios({ method: 'POST', baseURL: baseUrl, url: path });
            expect(response).to.have.status(202);
            expect(response.data).to.eql({ test: 'body' });

            scope.done();
        });

        it('should mock POST requests with body', async () => {
            const scope = nock(baseUrl).post(path, { body: 'test' }).reply(202, { test: 'body' });

            const response = await axios({ method: 'POST', baseURL: baseUrl, url: path, data: { body: 'test' } });
            expect(response).to.have.status(202);
            expect(response.data).to.eql({ test: 'body' });

            scope.done();
        });
    });
});
