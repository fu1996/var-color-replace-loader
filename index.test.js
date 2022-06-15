const loader = require('./index');

const demoSource = `background: #522300;color: #95d93d;border-color: #95d93d;color: #adc;`;

test('replace color ', () => {
    expect(loader(demoSource)).toEqual(`background: var(--color-orange-10);color: var(--color-moss-5);border-color: var(--color-moss-5);color: #adc;`)
})