//这是一个使用Route的路由组件
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { capitalize } from '../common/util';
import routers from './routersData';
import MainLayout from '../layout/MainLayout/MainLayout';
interface RouteType {
  path: string;
}
//快速导入工具函数
const lazyLoad = (moduleName: string) => {
  const Module = lazy(() => import(`../pages/${moduleName}/index.tsx`));
  // 必须添加Suspense，否则导致无限循环
  return <Suspense fallback={<div>123</div>}><Module /></Suspense>;
};

// 路由鉴权组件
// const Appraisal = ({ children }: any) => {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/login" />;
// };

// 去掉url中的中划线「-」，格式化为驼峰格式
const getComponentPath = (pathname: string) => {
  return pathname.replace(/^\//, '')
    .split('/')
    .map(word => word.split('-').map(capitalize).join(''))
    .join('/');
};

const getRoute = (route: RouteType) => {
  return <Route key={route.path} path={route.path} element={lazyLoad(getComponentPath(route.path))} />
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        {routers.map(getRoute)}
        <Route path="*" element={<div>未找到</div>} />
        <Route index element={lazyLoad(getComponentPath(routers[0].path))} />
      </Route>
      {getRoute({ path: 'login' })}
      {getRoute({ path: 'Ding' })}
    </Routes>
  );
}

export default Router;