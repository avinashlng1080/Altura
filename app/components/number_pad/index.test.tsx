import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NumberPad from '.';

describe('<NumberPad />', () => {
  test('should render all buttons', () => {
    const onPressMock = jest.fn();
    const {getByTestId, getAllByTestId} = render(
      <NumberPad onPress={onPressMock} />,
    );
    const numberPadComponent = getByTestId('number-pad-component');
    const buttons = getAllByTestId(/^number-pad-button-/);
    expect(numberPadComponent).toBeDefined();
    expect(buttons).toHaveLength(12);
  });

  test('should call onPress when a button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(<NumberPad onPress={onPressMock} />);
    const button = getByTestId('number-pad-button-1');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
    expect(onPressMock).toHaveBeenCalledWith(1);
  });

  test('NumberPad renders correctly', () => {
    const onPressMock = jest.fn();
    const tree = renderer.create(<NumberPad onPress={onPressMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
