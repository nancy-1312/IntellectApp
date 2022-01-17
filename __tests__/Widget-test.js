/**
 * @format
 */

import 'react-native';
import React from 'react';
import Widget from '../src/screens/Widget';

import { render, fireEvent } from '@testing-library/react-native';

test('given a widget, user can record there anger & frustration', () => {
    const { getByTestId } = render(
        <Widget />
    );

    fireEvent.press(getByTestId('button'));
    expect(getByTestId('buttonText').children).toContainEqual('Back');
});
