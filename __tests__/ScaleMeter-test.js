/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ScaleMeter from '../src/components/ScaleMeter';

const mockCallback = jest.fn(level => {
    if (level < 4) {
        return 'Low';
    } else if (level < 8) {
        return 'Mild';
    } else {
        return 'High';
    }
});

it('given a frustration level less than 4, mockCallback() returns Low', () => {
    expect(mockCallback(1)).toBe('Low');
});

it('given a frustration level greater than 3 and less than 8, mockCallback() returns Mild', () => {
    expect(mockCallback(6)).toBe('Mild');
});

it('given a frustration level greater than 7, mockCallback() returns High', () => {
    expect(mockCallback(9)).toBe('High');
});

it('given a scale meter, user can record there anger & frustration', () => {
    renderer.create(<ScaleMeter />);
});