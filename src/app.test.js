
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

function sum(a, b) {
    return a + b;
  }

test('adds 1 + 2 to be equal to 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('object assignment', () => {
    const data = {one: 1};
    //data['two'] = 2;
    data.two =  2;
    expect(data).toEqual({one: 1, two: 2});
  });