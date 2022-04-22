import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../HomePage';
import store from '../../redux/configStore';
const HomePageProvider = () => (
    <Provider store={store}>
        <HomePage />
    </Provider>
)

describe('The categories render properly', () => {
    it('renders correctly', () => {
        const component = renderer.create(<HomePageProvider />).toJSON()
        expect(component).toMatchSnapshot();
    })
})
