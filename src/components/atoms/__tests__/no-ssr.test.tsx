import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { NoSsr } from '../no-ssr';

describe('components/atoms no-ssr', () => {
  it('renders correctly', () => {
    const result = render(<NoSsr>Click me</NoSsr>);

    expect(result).toMatchSnapshot();
  });
});
