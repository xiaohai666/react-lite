import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { capitalize } from '../common/util';
import routers from './routersData';
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages';
// console.log(Location);

// //快速导入工具函数
// const lazyLoad = (moduleName: string) => {
//   const Module = lazy(() => import(`../pages/${moduleName}/index.tsx`));
//   // 必须添加Suspense，否则导致无限循环
//   return <Suspense fallback={<div>123</div>}><Module /></Suspense>;
// };

// 路由鉴权组件
// const Appraisal = ({ children }: any) => {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/login" />;
// };

// 去掉url中的中划线「-」，格式化为驼峰格式
const getComponentPath = (pathname: string) => pathname.replace(/^\//, '')
  .split('/')
  .map((word) => word.split('-').map(capitalize).join(''))
  .join('/');

const getRoute = (route: Route) => ({
  path: route.path,
  errorElement: <div>未找到</div>,
  async lazy() {
    const { default: PageModule, pageLoader } = await import(`../pages/${getComponentPath(route.path)}`);
    return { Component: PageModule, loader: pageLoader };
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...routers.map(getRoute),
      {
        path: '*',
        element: <div>未找到</div>,
      },
    ],
  },
  getRoute({ path: 'login' }),
]);

function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default Router;
