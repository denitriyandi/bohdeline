Ext.define('CrudExt.view.jenisPengesub.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.jenisPengesubForm',
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
                        name: 'nama_jenis_sub',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Nama'                      
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