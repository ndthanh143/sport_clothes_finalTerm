import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import ScrollToTop from './ScrollToTop';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Loader from './components/Loader';
import { getAllProducts } from './actions/productActions';
import { removeItemFromCart } from './actions/cartActions';
import Login from './components/Login';

function App() {
    const { loading, isAuthenticated, user } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart);
    const { products } = useSelector((state) => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        dispatch(getAllProducts());
    }, []);
    if (products.length > 0) {
        cartItems.map((item) => {
            let temp = products.find((product) => item.product === product._id);
            if (!temp) {
                dispatch(removeItemFromCart(item));
            }
        });
    }

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = route.layout || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = route.layout || DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    isAuthenticated && user.role === 'admin' ? (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    ) : null
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
