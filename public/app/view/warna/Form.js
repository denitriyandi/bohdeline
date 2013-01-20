Ext.define('CrudExt.view.warna.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.warnaForm',
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
		this.items = [{
                        name: 'id_warna_supplier',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'ID Warna Supplier'                      
                    },
                    {
                        name: 'id_kategori_warna',
                        xtype:'combobox',
                        fieldLabel: 'Kategori Warna',
                        valueField: 'id_kategori_warna',
                        displayField: 'id_kategori_warna',
                        store:'KatWarnas',
                        queryMode:'local',
                        typeAhead:true            
                    },                    
                    {
                        name: 'url_gambar',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'URL Gambar'                        
                    },
                    {
                        name: 'id_supplier',
                        xtype:'combobox',
                        fieldLabel: 'Supplier',
                        valueField: 'id_supplier',
                        displayField: 'nama_supplier',
                        store:'Suppliers',
                        queryMode:'local',
                        typeAhead:true
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