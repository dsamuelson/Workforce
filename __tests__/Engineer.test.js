const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

describe('Tests if the engineer object is created successfully', () => {
    test('Checks fields for engineer object', () => {
        const engineer = new Engineer('John', 1234, 'John@john.com', 'Engineer');

        expect(engineer.name).toBe('John');
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.role).toEqual('Engineer')
    });
});

describe('Tests if Employee methods return succesfully', () => {
    test('Tests getName method', () => {
        const engineer = new Engineer('John', 1234, 'John@john.com', 'Engineer');

        expect(engineer.getName()).toBe('John');
    });
    test('Tests getId method', () => {
        const engineer = new Engineer('John', 1234, 'John@john.com', 'Engineer');

        expect(engineer.getId()).toEqual(engineer.id.toString());
    });

    test('Tests getEmail method', () => {
        const engineer = new Engineer('John', 1234, 'John@john.com', 'Engineer');

        expect(engineer.getEmail()).toBe('John@john.com');
    });
    test('Tests getRole method', () => {
        const engineer = new Engineer('John', 1234, 'John@john.com', 'Engineer');

        expect(engineer.getRole()).toBe('Engineer');
    });
});

describe('Tests Engineer specific method', () => {
    test('Checks if github link is returned', () => {
        const engineer = new Engineer('John', 1234, 'John@john.com', 'Engineer', 'dsamuelson');

    expect(engineer.getGithub()).toBe('https://github.com/dsamuelson?tab=repositories')
});
});