/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import PyramidScale from '../src/components/PyramidScale';

test('given a pyramid scale, user can record there anger & frustration', () => {
    const { getByTestId } = render(
        <PyramidScale />
    );

    fireEvent.press(getByTestId('1test'));
    expect(getByTestId('level').children).toContainEqual('Low');

    fireEvent.press(getByTestId('4test'));
    expect(getByTestId('level').children).toContainEqual('High');

});