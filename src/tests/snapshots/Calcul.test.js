import React from 'react';
import { render } from '@testing-library/react';
import Calcul from '../../pages/Calcul';

describe('Calcul', () => {
  test('should match Calcul snapshot', () => {
    const tree = render(
      <Calcul />,
    );
    expect(tree).toMatchSnapshot();
  });
});
