import word from './index';


describe('simple jest test', () => {
  it('should match correct string', () => {
    expect(word).toBe('Hello, World!');
  });
});
