Ext.define('CrudExt.view.jnscushion.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis tea Cushion',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.jnscushionEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('jnscushionForm')
		];
		this.callParent(arguments);
	}

});