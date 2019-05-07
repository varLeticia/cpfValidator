const chai = require('chai'); 
const cpfValidator = require('../index');
const expect = chai.expect;

describe('cpfValidator()', () => {
    it('Deveria retornar true para o cpf ', () => {
        expect(cpfValidator('46083135842')).to.equal(true);
    });
    it('Deveria retornar true para o cpf ', () => {
        expect(cpfValidator('77788887772')).to.equal(false);
    }); 
    it('Deveria retornar false para o cpf ', () => {
        expect(cpfValidator('17171717171')).to.equal(false);
    });
    it('Deveria retornar true para o cpf ', () => {
        expect(cpfValidator('39703405860')).to.equal(true);
    });
    it('Deveria retornar false para o cpf ', () => {
        expect(cpfValidator('12345678910')).to.equal(false);
    });
    it('Deveria retornar false para o cpf ', () => {
        expect(cpfValidator('00000000000')).to.equal(false);
    });
});

