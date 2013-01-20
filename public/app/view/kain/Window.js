Ext.define('CrudExt.view.kain.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Cover Cushion',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.kainEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('kainForm')
		];
		this.callParent(arguments);
	}

});