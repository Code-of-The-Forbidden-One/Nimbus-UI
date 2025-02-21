import { afterEach, expect } from '@jest/globals';
import { cleanup } from '@testing-library/react-native';
import * as matchers from '@testing-library/jest-native';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
