const { jsxNamespacedName } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('John',1234,'jimmy@james.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})