Ext.define('CrudExt.view.katEpoxy.Window', {
	extend          : 'Ext.window.Window',
	title           : 'Form Edit Jenis Epoxy',
	width           : 400,
	height          : 100,
	layout          : 'fit',
	autoShow        : true,
	modal           : true,
	alias           : 'widget.katEpoxyEdit',
	initComponent   : function(){
		this.items = [
                    Ext.widget('katEpoxyForm')
		];
		this.callParent(arguments);
	}

});