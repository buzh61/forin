import orderByProps from '../src/js/app';

test('test sorting', () => {
  const person = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expectedData = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const sorting = orderByProps(person, ['name', 'level']);
  expect(sorting).toEqual(expectedData);
});
