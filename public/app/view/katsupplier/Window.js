Ext.define('CrudExt.view.katsupplier.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Kategori supplier',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.katsupplierEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('katsupplierForm')
		];
		this.callParent(arguments);
	}

});