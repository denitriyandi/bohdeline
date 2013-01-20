Ext.define('CrudExt.view.epoxy.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Epoxy',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.epoxyEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('epoxyForm')
		];
		this.callParent(arguments);
	}

});