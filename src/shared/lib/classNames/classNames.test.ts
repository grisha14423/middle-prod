import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('xomeClass')).toBe('xomeClass');
    });

    test('with additional params', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });

    test('with modes', () => {
        expect(classNames('someClass', { hovered: true }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });

    test('with mode false', () => {
        expect(classNames('someClass', { hovered: false }, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });

    test('with modes undef', () => {
        expect(classNames('someClass', { hovered: undefined }, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });
});
