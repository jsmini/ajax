let ajax = function(setting) {
  // 配置参数
  var opts = {
    // 请求方法
    method: (setting.setting || 'GET').toUpperCase(),
    url: setting.url || '',
    async: setting.async || true,
    data: setting.data || {},
    dataType: setting.dataType || 'json',
    success: setting.success || function() {},
    error: setting.error || function() {}
  }
  // data数据格式化函数
  function data_format(data) {
    let str = '';
    for(let i in data) {
      str += i + '=' + data[i] + '&'; 
    }
    return str.split('').slice(0, -1).join('');
  }
  // 1. 创建服务
  let xhr = null;
  try {
    xhr = new XMLHttpRequest();
  } catch (error) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  // 2. 打开服务和发送数据
  if(opts.method==='GET') {
    opts.open(opts.method, opts.url+'?'+data_format(opts.data), opts.async);
    opts.send();
  }else {
    opts.open(opts.method, opts.url, opts.async);
    opts.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    opts.send(opts.data);
  }
  // 3. 接收响应
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
      switch (opts.dataType) {
        case "json":
          var json = JSON.parse(xhr.responseText);
          opts.success(json);
          break;
        case "xml":
          opts.success(xhr.responseXML);
          break;
        default:
          opts.success(xhr.responseText);
          break;
      }
    }
  }

  xhr.onerror = function (err) {
    opts.error(err);
  }
}

export default ajax;