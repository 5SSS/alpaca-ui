export const oneOf = function(val, args){
	if (args.some(function(v) { return val == v })) {
		return val;
	}else {
		return 'default';
	}
}