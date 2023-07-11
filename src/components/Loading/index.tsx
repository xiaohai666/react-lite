import { createPortal } from 'react-dom';

import { notification, Spin } from 'antd';


// // 显示loading
// function showLoading () {
//     if (requestCount === 0) {
//         const dom = React.createElement('div',{
//             id:'loading',
//             style:{
//                 position:'fixed',

//             }
//         }, React.createElement(Spin, {size:'large'}, null))
//         // const root = document.getElementById('root')
//         // dom.setAttribute('id', 'loading')
//         // dom.style.position = 'fixed';
//         // dom.style.top = '0px';
//         // dom.style.bottom = '0px';
// console.log(dom);

//         // document.body.appendChild(dom)
//         createPortal(
//             dom,
//             document.body
//           )
//         // const dom1 = React.createElement(dom)
//         // ReactDOM.render(React.createElement(Spin, {size:'large'}, null), dom)
//     }
//     requestCount++
// }

// // 隐藏loading
// function hideLoading () {
//     requestCount--
//     if (requestCount === 0) {
//         document.body.removeChild(document.getElementById('loading'))
//     }
// }
const Loading = () => {



  return <>
    {createPortal(
      <Spin>
        <div style={{ position: 'fixed', top: '0', left: '0' }}>
          llll
        </div>

      </Spin>
      ,
      document.body
    )}
  </>


}