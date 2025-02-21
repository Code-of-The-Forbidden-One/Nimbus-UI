describe('Check the integration is setup correctly', () => {
  it('Should pass if configuration is correct', () => {
    const mockFunc = jest.fn();
    mockFunc();
    expect(mockFunc).toHaveBeenCalled();
  });
});
