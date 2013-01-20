Ext.define('CrudExt.view.jeniskain.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis Kain',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.jeniskainEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('jeniskainForm')
		];
		this.callParent(arguments);
	}

});