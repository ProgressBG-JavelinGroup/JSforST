var myApp = {
	DOMcache: {
		btnNode:document.getElementsByTagName('button')[0],
		outputNode:document.getElementById('output'),
	},
	clickHandler: function(){
		this.DOMcache.outputNode.innerHTML = "Iva";
	},
	init: function(){
		this.DOMcache.btnNode.addEventListener( 'click', this.clickHandler );
	}
}

myApp.init();