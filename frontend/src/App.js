import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import ScrollToTop from './ScrollToTop';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Loader from './components/Loader';

function App() {
    const { loading, isAuthenticated } = useSelector((state) => state.auth);
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

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
                                    isAuthenticated ? (
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
