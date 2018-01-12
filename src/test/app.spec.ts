import { expect, should } from 'chai';

import { value } from './data';
import * as rp from 'request-promise';

describe('Testeando un endpoint ', () => {

  it('deberia mostrar {data 100}', (done) => {
    rp('http://localhost:8001/data2')
      .then(res => {
        res = JSON.parse(res);
        expect(res.data).to.eql(100);
      })
      .catch(done);
    setTimeout(done, 300);
  });
});

describe('Testeando otro endpoint', () => {
  it('deberia mostrar exitoo', (done) => {
    rp('http://localhost:8001/data')
      .then(res => {
        expect(res).to.eql(value);
      })
      .catch(done);
    setTimeout(done, 300);

  });

});