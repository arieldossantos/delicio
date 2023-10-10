import { randomDelicioNickNames } from '../src';

describe('randomDelicioNickNames', () => {
  it('should return aleatory nickname', () => {
    const randomNickName = randomDelicioNickNames();
    expect(randomNickName).toBeTruthy();
  });
});
