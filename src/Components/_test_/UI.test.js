import { BrowserRouter as Router } from "react-router-dom";
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../HomePage';
import store from '../../redux/configStore';

const HomePageProvider = () => (
    <Provider store={store}>
        <Router>
            <HomePage />
        </Router>
    </Provider>
)

describe('The homepage renders its UI properly', () => {
    it('UI renders correctly', () => {
        const homePage = renderer.create(<HomePageProvider />).toTree()
        expect(homePage).toMatchSnapshot();
    })
})