import { vi } from 'vitest';

describe('Check the integration is setup correctly', () => {
  it('Should pass if configuration is correct', () => {
    const mockFunc = vi.fn();
    mockFunc();
    expect(mockFunc).toHaveBeenCalled();
  });
});
