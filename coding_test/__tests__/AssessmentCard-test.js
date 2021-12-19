/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AssessmentCard from '../src/screens/homeScreen/components/AssessmentCard';

it('renders correctly', () => {
  const tree = renderer.create(
    <AssessmentCard
      item={{
        id: '1',
        title: 'Advanced Health Screening',
        point: 9999,
        image:
          'https://w7.pngwing.com/pngs/64/886/png-transparent-human-hand-and-pink-heart-illustration-health-care-medicine-computer-icons-hospital-icon-love-purple-text-thumbnail.png',
        deadline: '2021/12/24',
      }}
    />,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly 2', () => {
  const tree = renderer.create(
    <AssessmentCard
      item={{
        id: '1',
        title: 'Advanced Health Screening',
        image:
          'https://w7.pngwing.com/pngs/64/886/png-transparent-human-hand-and-pink-heart-illustration-health-care-medicine-computer-icons-hospital-icon-love-purple-text-thumbnail.png',
        deadline: '2021/12/24',
      }}
    />,
  );
  expect(tree).toMatchSnapshot();
});
