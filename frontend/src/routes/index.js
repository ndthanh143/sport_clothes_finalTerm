import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import About from '~/pages/About';
import News from '~/pages/News';
import Collection from '~/pages/Collection';
import ProductDetails from '~/pages/ProductDetails';
import Search from '~/pages/Search';

// import SideBarLayout from '~/components/Layout/SideBarLayout';
import Account from '~/pages/Account';
import Cart from '~/pages/Cart';
import Dashboard from '~/pages/Admin/Dashboard';
import ListProducts from '~/pages/Admin/ListProducts';
import SideBarLayout from '~/components/Layout/SideBarLayout';
import UpdateProduct from '~/pages/Admin/UpdateProduct';
import NewProduct from '~/pages/Admin/NewProduct';
import ListUsers from '~/pages/Admin/ListUsers';
import Checkout from '~/pages/Checkout';
import Login from '~/components/Login';
import Register from '~/components/Register';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/collection/thoi-trang-the-thao', component: Collection },
    { path: '/collection/quan-ao-bong-da', component: Collection },
    { path: '/collection/quan-ao-bong-chuyen', component: Collection },
    { path: '/collection/trang-phuc-chay-bo', component: Collection },
    { path: '/collection/phu-kien-the-thao', component: Collection },
    { path: '/collection/do-clb-doi-tuyen', component: Collection },
    { path: '/collection', component: Collection },
    { path: '/product/:id', component: ProductDetails },
    { path: '/search/:keyword', component: Search },
    { path: '/account', component: Account },
    { path: '/myorders', component: Account },
    { path: '/order/:id', component: Account },

    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/shipping', component: Checkout },
    { path: '/order/confirm', component: Checkout },
    { path: '/order/payment', component: Checkout },
    { path: '/order/success', component: Checkout },
];

const privateRoutes = [
    { path: '/admin/dashboard', component: Dashboard, layout: SideBarLayout },
    { path: '/admin/product', component: ListProducts, layout: SideBarLayout },
    { path: '/admin/product/new', component: NewProduct, layout: SideBarLayout },
    { path: '/admin/product/edit/:id', component: UpdateProduct, layout: SideBarLayout },
    { path: '/admin/users', component: ListUsers, layout: SideBarLayout },
];

export { publicRoutes, privateRoutes };
