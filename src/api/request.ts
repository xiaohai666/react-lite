// 请求类型
// get     列表
//         详情
//         menu


// post    新增
//         删除
//         修改
import { createPortal } from 'react-dom';
import * as React from 'react';

import axios from './axios'
import { notification,Spin } from 'antd';

declare module "axios" {
    export interface AxiosRequestConfig {
        loading?: boolean
    }
}
let requestCount = 0 

// 显示loading
function showLoading () {
    if (requestCount === 0) {
        const dom = React.createElement('div',{
            id:'loading',
            style:{
                position:'fixed',

            }
        }, React.createElement(Spin, {size:'large'}, null))
     
console.log(dom);

        // document.body.appendChild(dom)
        createPortal(
            dom,
            document.body
          )
        // const dom1 = React.createElement(dom)
        // ReactDOM.render(React.createElement(Spin, {size:'large'}, null), dom)
    }
    requestCount++
}

// 隐藏loading
function hideLoading () {
    requestCount--
    if (requestCount === 0) {
        document.body.removeChild(document.getElementById('loading'))
    }
}



export const api = axios.create({
    timeout: 3000,
    baseURL: import.meta.env.VITE_BASE_URL + '',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});

// 请求拦截
api.interceptors.request.use((config) => {
    console.log('config:',config);
    showLoading()
    // if (config.loading) {
        
    // }
    return config;
})

// 返回拦截
api.interceptors.response.use(
    (response) => {        
        const { data, status, statusText } = response;
        const {code,message} = data
        console.log('response:', response);
        if (code === 200) {
            return data;
        }

        if (code === 403) {
            window.location.href = '/login';
        }

        return Promise.reject(new Error(statusText || 'Error'));
    },
    (error) => {
        console.log('err:', error); // for debug
        // if (error.status) {
        //     switch (error.status) {
        //         case 403:
        //             window.location.href = '/login';
        //             break;
        //         // 404请求不存在                
        //         case 404:
        //             notification.error({
        //                 message: `请求不存在`,
        //                 description: error.statusText || 'Error',
        //             });
        //             break;
        //         default:
        //             notification.error({
        //                 message: `请求错误`,
        //                 description: error.statusText || 'Error',
        //             });

        //     }
        // }
        return Promise.reject(error);
        // if (options.loading && window.loadingElement) {
        //     window.loadingElement.style.display = 'none';
        //   }
    },
);
