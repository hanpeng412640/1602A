function ajax(opt) {
    if (opt.data && typeof opt.data === "object") {
        var str = "";
        for (var key in opt.data) {
            str += key + "=" + opt.data[key] + "&";
        }
        opt.data = str.slice(0, -1);
    }
    var method = opt.method ? opt.method : "get";
    var async = opt.async ? true : opt.async;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTp");
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                opt.success && opt.success(xhr.responseText);
            }
        }
    }
    var x = method === "get" && opt.data ? "?" + opt.data : "";
    xhr.open(method, opt.url + x, async);
    var y = method === "post" && opt.data ? opt.data : null;
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(y)
}