function EasyFormData() {
}

EasyFormData.prototype.kv_pair = [];

EasyFormData.prototype.append = function(key, value) {
  this.kv_pair.push([key, value]);
};

EasyFormData.prototype.toString = function() {
	var sb = [];
	
	for(var i = 0; i < this.kv_pair.length; i++) {
		var key = this.kv_pair[i][0];
		var value = this.kv_pair[i][1];
		
		key = escape(key);
		value = escape(value);
		
		sb.push(key+"="+value);
		
		if(i+1 < this.kv_pair.length) {
			sb.push("&");
		}
	}
	
	return sb.join("");
}
