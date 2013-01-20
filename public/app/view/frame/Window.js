Ext.define('CrudExt.view.frame.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Frame',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.frameEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('frameForm')
		];
		this.callParent(arguments);
	}

});