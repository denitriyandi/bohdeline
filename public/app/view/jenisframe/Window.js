Ext.define('CrudExt.view.jenisFrame.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis Frame',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.jenisFrameEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('jenisFrameForm')
		];
		this.callParent(arguments);
	}

});