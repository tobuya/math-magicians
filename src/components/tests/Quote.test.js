import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../Quote';

describe('Quote Page test', () => {
  it('Whether Quote page renders', () => {
    const tree = TestRenderer
      .create(
        <BrowserRouter>
          <Quote />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
