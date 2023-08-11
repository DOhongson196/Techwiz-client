import { routesConfig } from '../config';

//Layout
import { HeaderOnly } from '../layout';

import Home from '../pages/Home';
import NotAuthority from '../pages/NotAuthority';
import Explore from '../pages/Explore';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Ranking from '../pages/Product';
import NFTDetail from '../pages/NFTDetail';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/CheckOut';
import MyOrder from '../pages/MyOrder';
import LogOut from '../pages/Logout';
import ActiveUser from '../pages/ActiveUser';
import ResetPass from '../pages/ResetPass';
import AllPlayers from '../pages/AllPlayers';

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.authority, component: NotAuthority },
  { path: routesConfig.explore, component: Explore },
  { path: routesConfig.login, component: Login, layout: HeaderOnly },
  { path: routesConfig.register, component: Register, layout: HeaderOnly },
  { path: routesConfig.product, component: Ranking },
  { path: routesConfig.nftdetail, component: NFTDetail },
  { path: routesConfig.notFound, component: NotFound },
  { path: routesConfig.logout, component: LogOut },
  { path: routesConfig.resetpass, component: ResetPass },
  { path: routesConfig.activeuser, component: ActiveUser, layout: HeaderOnly },
  { path: routesConfig.players, component: AllPlayers },
];

const privateRoutes = [
  { path: routesConfig.cart, component: Cart },
  { path: routesConfig.checkout, component: Checkout, layout: HeaderOnly },
  { path: routesConfig.myorder, component: MyOrder },
  { path: routesConfig.profile, component: Profile },
];

export { publicRoutes, privateRoutes };
