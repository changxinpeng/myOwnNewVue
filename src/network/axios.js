import originAxios from 'axios'

export default function axios(option) {
  return new Promise((resolve, reject) => {
    //创建axios实例
    const instance = originAxios.create({
      baseURL: 'http://123.207.32.32:8000/api/x6/home/multidata',
      timeout: 5000
    });

    //配置请求和响应拦截
    instance.interceptors.request.use(config => {
      console.log('request拦截成功');
      //1.比如config中的一些信息不符合服务器的要求
      //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      //3.某些网络请求(比如登录(token)),必须携带一些特殊的信息

      return config
    },err => {
      console.log('request拦截失败');
      return err
    })

    instance.interceptors.response.use(response => {
      return response.data
    }, err => {
      console.log('response拦截失败');
      console.log(err);
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break;
          case 401:
            err.message = '未授权的访问'
            break;
        }
      }
      return err
    })

    //传入对象进行网络请求
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}