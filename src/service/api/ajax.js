import axios from "axios";

export default function ajax(url = "", params = {}, type = "GET") {
  //1.变量
  let promise;
  //2.返回一个promise对象
  return new Promise((resolve, reject) => {
    //2.1判断请求的类型
    if (type.toUpperCase() === "GET") {
      //get请求
      //2.2拼接字符串
      let paramsStr = "";
      //2.3遍历
      Object.keys(params).forEach((key) => {
        paramsStr += key + "=" + params[key] + "&";
      });
      //2.4过滤最后的&
      /**
       * 为防止请求缓存，在尾部加了时间戳
       */
      if (paramsStr) {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&"));
      }
      //2.5拼接完整路径
      url += "?" + paramsStr;
      //2.6发起get请求
      promise = axios.get(url);
    } else if (type.toUpperCase() === "POST") {
      //post请求
      //2.7发起post请求
      promise = axios.post(url, params);
    }
    //2.8处理结果并返回
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
