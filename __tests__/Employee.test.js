const { jest:requiredJest, test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe('Tests if the employee object is created successfully', () => {
    test('creates employee object', () => {
    const employee = new Employee('John',1234,'jimmy@james.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});
});

describe('Checks if methods are returned as Employee', () => {
test('checks employee role method', () => {
    const employee = new Employee('john', 1234, 'jimy@james.com');

    expect(employee.getRole()).toBe('Employee');
});

test('checks employee Name method', () => {
    const employee = new Employee('John',1234,'jimmy@james.com');

    expect(employee.getName()).toBe('John');
});

test('Checks employee id method', () => {
    const employee = new Employee('John',1234,'jimmy@james.com');

    expect(employee.getId()).toEqual(employee.id.toString());
});

test('checks employee email method', () => {
    const employee = new Employee('John',1234,'jimmy@james.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('jimmy@james.com'));
});

});