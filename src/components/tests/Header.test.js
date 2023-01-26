import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Header page test', () => {
  it('Match snapshot for new Header', () => {
    const header = render(<Router><Header /></Router>);
    expect(header).toMatchSnapshot();
  });
});
