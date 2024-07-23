import fizzBuzz from "../fizzBuzz";
let listener=jest.spyOn(console, 'log')
test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
  fizzBuzz(5);

  expect(listener.mock.calls.length).toEqual(5);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
  fizzBuzz(15);

  expect(listener.mock.calls[0][0]).toEqual(1);
  expect(listener.mock.calls[1][0]).toEqual(2);
  expect(listener.mock.calls[2][0]).toEqual('fizz');
  expect(listener.mock.calls[3][0]).toEqual(4);
  expect(listener.mock.calls[4][0]).toEqual('buzz');
  expect(listener.mock.calls[5][0]).toEqual('fizz');
  expect(listener.mock.calls[6][0]).toEqual(7);
  expect(listener.mock.calls[7][0]).toEqual(8);
  expect(listener.mock.calls[8][0]).toEqual('fizz');
  expect(listener.mock.calls[9][0]).toEqual('buzz');
  expect(listener.mock.calls[10][0]).toEqual(11);
  expect(listener.mock.calls[11][0]).toEqual('fizz');
  expect(listener.mock.calls[12][0]).toEqual(13);
  expect(listener.mock.calls[13][0]).toEqual(14);
  expect(listener.mock.calls[14][0]).toEqual('fizzbuzz');
});

beforeEach(() => {
  listener=jest.spyOn(console, 'log');
});

afterEach(() => {
  listener.mockRestore();
});