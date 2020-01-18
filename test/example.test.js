// IMPORT MODULES under test here:
import isYes from '../is-yes.js';

const test = QUnit.test;

test('Y is expected to return true', function(assert) {
    const testVariable = 'Y';
    const actualResults = isYes(testVariable);
    const expectedResults = true;
    assert.equal(actualResults, expectedResults);
});

test('Yes is expected to return true', function(assert) {
    const testVariable = 'Yes';
    const actualResults = isYes(testVariable);
    const expectedResults = true;
    assert.equal(actualResults, expectedResults);
});

test('YES is expected to return true', function(assert) {
    const testVariable = 'YES';
    const actualResults = isYes(testVariable);
    const expectedResults = true;
    assert.equal(actualResults, expectedResults);
});

test('yes is expected to return true', function(assert) {
    const testVariable = 'yes';
    const actualResults = isYes(testVariable);
    const expectedResults = true;
    assert.equal(actualResults, expectedResults);
});

test('no is expected to return false', function(assert) {
    const testVariable = 'no';
    const actualResults = isYes(testVariable);
    const expectedResults = false;
    assert.equal(actualResults, expectedResults);
});

test('nope is expected to return false', function(assert) {
    const testVariable = 'nope';
    const actualResults = isYes(testVariable);
    const expectedResults = false;
    assert.equal(actualResults, expectedResults);
});

test('N is expected to return false', function(assert) {
    const testVariable = 'N';
    const actualResults = isYes(testVariable);
    const expectedResults = false;
    assert.equal(actualResults, expectedResults);
});

test('asdf is expected to return false', function(assert) {
    const testVariable = 'asdf';
    const actualResults = isYes(testVariable);
    const expectedResults = false;
    assert.equal(actualResults, expectedResults);
});


