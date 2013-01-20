Ext.define('CrudExt.view.packing.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.packingForm',
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
                name: 'nama_packing',
                tooltip: 'field tidak boleh kosong',
                fieldLabel: 'Nama Packing'
            },{
                name: 'id_jenis_packing',
                xtype:'combobox',
                fieldLabel: 'Jenis Packing',
                valueField: 'id_jenis_packing',
                displayField: 'nama_jenis_packing',
                store:'JenisPackings',
                queryMode:'local',
                typeAhead:true 
            },{
                name: 'id_warna_pabrik',
                xtype:'combobox',
                fieldLabel: 'ID Warna Pabrik',
                valueField: 'id_warna_pabrik',
                displayField: 'id_warna_pabrik',
                store:'Warnas',
                queryMode:'local',
                typeAhead:true                
            },{
                name: 'ukuran',
                tooltip: 'field tidak boleh kosong',
                fieldLabel: 'Ukuran'
            },{
                name: 'bobot',
                tooltip: 'field tidak boleh kosong',
                fieldLabel: 'Bobot'
            },{
                name: 'satuan',
                tooltip: 'field tidak boleh kosong',
                fieldLabel: 'Satuan'
            },{
                name: 'stok',
                tooltip: 'field tidak boleh kosong',
                fieldLabel: 'Stok'
            },{
                name: 'id_supplier',
                xtype:'combobox',
                fieldLabel: 'Supplier',
                valueField: 'id_supplier',
                displayField: 'nama_supplier',
                store:'Suppliers',
                queryMode:'local',
                typeAhead:true                      
            },{
                name: 'remark',
                tooltip: 'field tidak boleh kosong',
                fieldLabel: 'Remark'
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