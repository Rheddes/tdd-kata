import * as chai from 'chai';

declare global {
    namespace Chai {
        interface Assertion {
            alive: Assertion;
            dead: Assertion;
        }
    }
}

chai.use(function (chai, utils) {
    const Assertion = chai.Assertion;
    Assertion.addProperty('alive', function () {
        const obj = this._obj;
        new Assertion(obj).to.be.true;
    });

    Assertion.addProperty('dead', function () {
        const obj = this._obj;
        new Assertion(obj).to.be.false;
    });
});

const expect = chai.expect;