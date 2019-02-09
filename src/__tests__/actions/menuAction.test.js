import Enzyme from 'enzyme';
import configureMockStore from 'redux-mock-store';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { getMenu } from '../../actions/menuAction';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const API_HOST_URL = process.env.API_URL;


it.only('test Menu action', () => {
  const url = `${API_HOST_URL}/menu`;
  fetchMock.getOnce(url,{ 
    "menu": []
   
  });
  const expectedActions = [
    {
      payload: { menu: [] },
      type: 'GET_MENU'
    }
  ];
  const store = mockStore();

  return store
    .dispatch(getMenu())
    .then(() => expect(store.getActions()).toEqual(expectedActions));
});