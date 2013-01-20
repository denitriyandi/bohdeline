Ext.define('CrudExt.view.jenisFrame.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.jenisFrameForm',
	requires        : [
                            'Ext.form.Field'
                        ],
	defaultType     : 'textfield',
	defaults        : {
                            allowBlank: false,
                            labelAlign: 'left',
                            labelWidth: 150
                        },
	buttonAlign     : 'center',
	padding         : 5,
	style           : 'background-color: #fff;',
	border          : false,
	initComponent   : function(){
		this.items = [                    
                    {
                        name: 'bahan',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Bahan'                      
                    }                    
		];
		this.buttons = [
                    {
                        text: 'Simpan',
                        action: 'save',
                        itemId: 'simpan',
                        iconCls: 'save'
                    },
                    {
                        text: 'Batal',
                        action: 'cancel',
                        itemId: 'batal',
                        iconCls: 'cancel',
                        handler: function(){
                            this.up('window').close();
                        }
                    }
		];
		this.callParent(arguments);
	}
});