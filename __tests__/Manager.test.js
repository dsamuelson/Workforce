const Manager = require('../lib/Manager');

describe('Tests if the manager object is created successfully', () => {
    test('Checks fields for manager object', () => {
        const manager = new Manager('John', 1234, 'John@john.com', 'Manager', 4567);

        expect(manager.name).toBe('John');
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.role).toEqual('Manager')
        expect(manager.officeNum).toEqual(expect.any(Number));
    });
});

describe('Tests if Employee methods return succesfully', () => {
    test('Tests getName method', () => {
        const manager = new Manager('John', 1234, 'John@john.com', 'Manager');

        expect(manager.getName()).toBe('John');
    });
    test('Tests getId method', () => {
        const manager = new Manager('John', 1234, 'John@john.com', 'Manager');

        expect(manager.getId()).toEqual(manager.id.toString());
    });

    test('Tests getEmail method', () => {
        const manager = new Manager('John', 1234, 'John@john.com', 'Manager');

        expect(manager.getEmail()).toBe('John@john.com');
    });
    test('Tests getRole method', () => {
        const manager = new Manager('John', 1234, 'John@john.com', 'Manager');

        expect(manager.getRole()).toBe('Manager');
    });
});

describe('Tests Manager specific method', () => {
    test('Checks if manager Role link is returned', () => {
        const manager = new Manager('John', 1234, 'John@john.com', 'Manager');

    expect(manager.getRole()).toBe('Manager')
});
});