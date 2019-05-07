const chai = require('chai'); 
const cpfValidator = require('../cpf');
const expect = chai.expect;

describe('cpfValidator()', () => {
    it('Deveria retornar true para o cpf ', () => {
        expect(cpfValidator('46083135842')).to.equal(true);
    });
    it('Deveria retornar true para o cpf ', () => {
        expect(cpfValidator('77788887772')).to.equal(false);
    }); 
    it('Deveria retornar true para o cpf ', () => {
        expect(cpfValidator('25384614365')).to.equal(false);
    });
    it('Deveria retornar true para o cpf ', () => {
        expect(cpfValidator('39703405860')).to.equal(true);
    });
    it('Deveria retornar true para o cpf ', () => {
        expect(cpfValidator('460.831.358-42')).to.equal(true);
    });
});

