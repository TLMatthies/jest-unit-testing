import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div 1/4 -- success', () => {
    const expected = 1/4;
    const got = mut.div(1, 4);
    expect(got).toBe(expected);
  });

test('Testing div 1/-4 -- success', () => {
    const expected = 1/-4;
    const got = mut.div(1, -4);
    expect(got).toBe(expected);
  });

test('Testing containsNum Tim29 -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("Tim29");
    expect(got).toBe(expected);
});

test('Testing containsNum Hello0 -- success', () => {
    const expected = true;
    const got = mut.containsNumbers('Hello0');
    expect(got).toBe(expected);
})

test('Testing containsNum 1Hello -- success', () => {
    const expected = true;
    const got = mut.containsNumbers('1Hello');
    expect(got).toBe(expected);
})

test('Testing containsNum Hey.What -- success', () => {
  const expected = false;
  const got = mut.containsNumbers('Hey.What');
  expect(got).toBe(expected);
})