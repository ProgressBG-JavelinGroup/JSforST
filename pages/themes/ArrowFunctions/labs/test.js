var obj = {
	userName: 'obj1',
	f: function () {
		console.log(this.userName);
	},
	a:()=>{
		console.log(`this: ${this}`);
		console.log(this.userName);
	}
}



obj.f();
obj.a();