import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';


it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id:1,
      name: 'john snow',
      username: 'johny',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})
