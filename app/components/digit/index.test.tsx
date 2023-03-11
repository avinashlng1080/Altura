import {render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Digit from './';
describe('<Digit />', () => {
  test('should render a <View /> component', () => {
    const {getByTestId} = render(<Digit isSelected={false} />);
    const digitComponent = getByTestId('digit-component');
    expect(digitComponent).toBeDefined();
    expect(digitComponent.type).toEqual('View');
  });

  test('Digit renders correctly', () => {
    const tree = renderer.create(<Digit isSelected={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
