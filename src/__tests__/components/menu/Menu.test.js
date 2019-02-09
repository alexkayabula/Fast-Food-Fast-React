import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow} from 'enzyme';


Enzyme.configure({ adapter: new EnzymeAdapter() });

it('test rendering all menu', () => {
  const props = {
    getMenu: () => jest.fn(),
    articles: []
  };
  const wrapper = shallow(<menu {...props} />);
  expect(wrapper).toMatchSnapshot();
});

