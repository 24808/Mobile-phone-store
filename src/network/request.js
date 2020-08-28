import axios from 'axios';
// import axios from 'axios';


export function request(config) {
  const instance = axios.create({
    baseURL: "//123.207.32.32:8000/",
    timeout: 5000
  })






  // 2. axios的拦截器

  instance.interceptors.response.use(res => {
    return res
    // console.log(res.data);
  }, err => {
    console.log(err);
  })
  return instance(config)


}
// export function request(config) {
//   const instance = axios.create({
//     baseURL: "//123.207.32.32:8000",
//     timeout: 5000

//   })
// }
