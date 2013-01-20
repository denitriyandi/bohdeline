Ext.define('CrudExt.view.jenisPengesub.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis Pengesub',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.jenisPengesubEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('jenisPengesubForm')
		];
		this.callParent(arguments);
	}

});