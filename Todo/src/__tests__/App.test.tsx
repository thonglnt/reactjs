// Lib
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from '../App';

describe('App', () => {
  test('It should render App', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
