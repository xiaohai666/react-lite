import axios, { InternalAxiosRequestConfig } from 'axios';

if (import.meta.env.DEV) {
  axios.defaults.adapter = (config: InternalAxiosRequestConfig) => {
    const BASE_TIMEOUT = 100000;
    const response = {
      status: 200,
      statusText: 'OK',
      headers: {},
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fulfill = (data: object | null) => {
          if (data) {
            resolve({
              ...response,
              data,
              config,
            });
          } else {
            reject(new Error('未找到api'));
          }
        };
        import(`mock${config?.url ?? ''.replace(/^\//, '')}.ts`)
          .then((module) => {
            const handler = config.method && module[config.method];
            if (handler) {
              Promise.race([handler(config.params, config.data ? JSON.parse(config.data) : config.data, config)])
                .then((data) => {
                  fulfill(data);
                }, reject);
            } else {
              fulfill(null);
            }
          })
          .catch(() => {
            fulfill(null);
          });
      }, Math.floor(BASE_TIMEOUT * Math.random()));
    });
  };
}

export default axios;
