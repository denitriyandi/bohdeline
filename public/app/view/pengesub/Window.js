Ext.define('CrudExt.view.pengesub.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit pengesub',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.pengesubEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('pengesubForm')
		];
		this.callParent(arguments);
	}

});