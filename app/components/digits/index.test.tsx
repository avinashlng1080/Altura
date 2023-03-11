import {render} from '@testing-library/react-native';
import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

import Digit from '../digit';

import Digits from '.';

describe('<Digits />', () => {
  test('should render a <View /> component', () => {
    const {getByTestId} = render(<Digits currentLength={0} />);
    const digitsComponent = getByTestId('digits-component');
    expect(digitsComponent).toBeDefined();
    expect(digitsComponent.type).toEqual('View');
  });

  test('should render 6 <Digit /> components', () => {
    const {getAllByTestId} = render(<Digits currentLength={0} />);
    const digitComponents = getAllByTestId('digit-component');
    expect(digitComponents).toHaveLength(6);
  });

  test('Digits renders correctly', () => {
    const tree = renderer.create(<Digit isSelected={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
