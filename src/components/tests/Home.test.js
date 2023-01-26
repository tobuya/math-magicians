import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home Page test', () => {
  it('Whether Home page renders', () => {
    const tree = TestRenderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
