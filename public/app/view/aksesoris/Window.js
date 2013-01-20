Ext.define('CrudExt.view.aksesoris.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Aksesoris',
	width           : 400,
	height          : 400,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.aksesorisEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('aksesorisForm')
		];
		this.callParent(arguments);
	}

});