// Lib
import { render } from '@testing-library/react';

// Components
import BodyContent, { BodyContentProps } from '@components/BodyContent';

describe('Test BodyContent component', () => {
  const initBodyContent: BodyContentProps = {
    children: <></>,
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(<BodyContent {...initBodyContent} />);

    expect(container).toMatchSnapshot();
  });
});
