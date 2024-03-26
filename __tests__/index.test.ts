import { waitSeconds } from '../src/index';

describe('example of asynchronous testing', () => {
  test('testing with async/await', async () => {
    expect(await waitSeconds(1)).toBe('waited 1 seconds');
  });

  test('testing returning a promise', () => {
    return expect(waitSeconds(1.5)).resolves.toBe('waited 1.5 seconds');
  });

  test('testing returning a promise with callback function', () => {
    return waitSeconds(0.5).then((response) => {
      expect(response).toBe('waited 0.5 seconds');
    });
  });

  test('testing with callback function', (done) => {
    waitSeconds(0.8).then((response) => {
      expect(response).toBe('waited 0.8 seconds');
      done();
    });
  });
});