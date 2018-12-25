# easyFormData.js

一个简单的库，解决用[uHttpSharp](https://github.com/bonesoul/uhttpsharp)做服务端导致的FormData boundard warp问题。

A simple library, solved [uHttpSharp](https://github.com/bonesoul/uhttpsharp) cause FormData boundard warp problems.

</br>

### Example:

```javaScript
var data=new EasyFormData();
data.append("name", name);
data.append("pw", pw);

xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	//do something...
}
xmlhttp.open("POST",url,true);
xmlhttp.send(data);
```
