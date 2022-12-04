import { describe, expect, test } from '@jest/globals';
import { render } from 'react-dom';
import Page from './Page';

describe('Page test', () => {
    test('Page load', () => {
        const { asFragment } = render(<Page />);
        expect(asFragment()).toMatchSnapshot();
    });
});
