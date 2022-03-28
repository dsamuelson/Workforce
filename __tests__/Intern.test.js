const Intern = require('../lib/Intern');

describe('Tests if the intern object is created successfully', () => {
    test('Checks fields for intern object', () => {
        const intern = new Intern('John', 1234, 'John@john.com', 'Notre Dame');

        expect(intern.name).toBe('John');
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.role).toEqual('Intern')
        expect(intern.school).toBe('Notre Dame');
    });
});

describe('Tests if Employee methods return succesfully', () => {
    test('Tests getName method', () => {
        const intern = new Intern('John', 1234, 'John@john.com', 'Notre Dame')

        expect(intern.getName()).toBe('John');
    });
    test('Tests getId method', () => {
        const intern = new Intern('John', 1234, 'John@john.com', 'Notre Dame')

        expect(intern.getId()).toEqual(intern.id.toString());
    });

    test('Tests getEmail method', () => {
        const intern = new Intern('John', 1234, 'John@john.com', 'Notre Dame')

        expect(intern.getEmail()).toBe('John@john.com');
    });
    test('Tests getRole method', () => {
        const intern = new Intern('John', 1234, 'John@john.com', 'Notre Dame')

        expect(intern.getRole()).toBe('Intern');
    });
});

describe('Tests Intern specific method', () => {
    test('Checks if school is returned', () => {
        const intern = new Intern('John', 1234, 'John@john.com', 'Notre Dame');

    expect(intern.getSchool()).toBe('Notre Dame');
});
});