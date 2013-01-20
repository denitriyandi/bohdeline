Ext.define('CrudExt.view.dataLolosHarian.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.dataLolosHarianForm',
	requires        : [
                            'Ext.form.Field'
                        ],
	defaultType     : 'textfield',	
	buttonAlign     : 'center',	
	style           : 'background-color: #fff;',
	border          : false,    
    defaults: {
        width: 220,
        labelWidth: 90
    },
	initComponent   : function(){
		this.items = [{
                xtype:'checkbox',
                checked: true,
                fieldLabel: 'Pilih data yang ditampilkan',
                boxLabel: 'Lolos',
                name: 'tampil',
                inputValue: 'y'
            },{
                xtype:'checkbox',
                boxLabel: 'Tidak Lolos',
                name: 'tampil',
                inputValue: 'n'            
            },{
                fieldLabel: 'Periode',
                xtype:'datefield',
                name:'tanggal'
            },{
                fieldLabel: 'Sampai',
                xtype:'datefield',
                name:'tanggal'
            }
		];
		this.buttons = [
                    {
                        text: 'SET',
                        action: 'save',
                        itemId: 'simpan',
                        iconCls: 'save'
                    },
                    {
                        text: 'PRINT',
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


