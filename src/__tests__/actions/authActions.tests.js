/* eslint-disable jest/no-identical-title */
/* eslint-disable jest/valid-expect-in-promise */
import { registerUser} from '../../actions/authActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('registerUser() action', () => {
afterEach(() => fetchMock.restore());

  it('returns errors given incorrect data', () => {
    const API_HOST_URL = process.env.API_URL;
    fetchMock.postOnce(`${API_HOST_URL}/auth/signup`, {
      'Content-Type': 'application/json',
      body: {
        
          message: 'The username should only contain alphabetic characters'
        
      }
    });
    const invalidData = {
      
        name: 'Alex',
        username: '111',
        password: 'Alex'
      
    };
    const store = mockStore();
    const expectedActions = [
      {
      
        payload: {
          
            message: 'The username should only contain alphabetic characters'
          
        }
      }
    ];
    store
      .dispatch(registerUser(invalidData))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
