import React from 'react';
import { shallow} from 'enzyme';


it('test rendering all menu', () => {
  const props = {
    getMenu: () => jest.fn(),
    articles: []
  };
  const wrapper = shallow(<menu {...props} />);
  expect(wrapper).toMatchSnapshot();
});
