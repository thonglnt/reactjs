// Lib
import { render, screen } from '@testing-library/react';

// Components
import { Input, InputProps } from '@components/Input';

describe('Test Input component', () => {
  const initInput: InputProps = {
    id: '1',
    label: 'Name',
    name: 'name',
  };

  test('It should render correctly with initial Props', () => {
    const { container } = render(<Input {...initInput} />);

    expect(container).toMatchSnapshot();
  });

  test('It should match DOM Snapshot', () => {
    const { container } = render(
      <Input
        {...initInput}
        defaultValue='name'
        errorMessage='error'
        type='email'
        placeholder='Please enter name'
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test('It should render correctly with error message', () => {
    render(<Input errorMessage='error' {...initInput} />);

    expect(screen.getByText('error'));
  });
});
