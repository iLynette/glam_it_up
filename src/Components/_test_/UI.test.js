import { BrowserRouter as Router } from "react-router-dom";
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../HomePage';
import store from '../../redux/configStore';
import DetailsPage from "../DetailsPage";

const HomePageProvider = () => (
    <Provider store={store}>
        <Router>
            <HomePage />
        </Router>
    </Provider>
)

const DetailsPageProvider = () => (
    <Provider store={store}>
        <Router>
            <DetailsPage />
        </Router>
    </Provider>
)

describe('renders details properly', () => {
    it('UI renders correctly', () => {
        const detailsPage = renderer.create(<DetailsPageProvider />).toTree()
        expect(detailsPage).toMatchSnapshot();
    })
})