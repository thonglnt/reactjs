// Lib
import { render } from '@testing-library/react';

// Components
import Spinner, { SpinnerProps } from '@components/Spinner';

describe('Test Spinner component', () => {
  test('It should render correctly with initial Props', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
