import { expect } from 'chai';

import { value, baseUrl } from './data';
import * as rp from 'request-promise';

describe('Testing an endpoint ', () => {

  it('should return {data 100}', (done) => {
    rp(`${baseUrl}/data`)
      .then(res => {
        res = JSON.parse(res);
        expect(res.data).to.eql(100);
        done();
      })
      .catch((e) => done(e));
  });
});

describe('GET /books', () => {

  it('should return array', (done) => {
    rp(`${baseUrl}/books`)
      .then(res => {
        res = JSON.parse(res);
        expect(res.data).to.be.an('array');
        done();
      })
      .catch((e) => done(e));
  });

});