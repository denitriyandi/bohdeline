Ext.define('CrudExt.view.kain.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.kainForm',
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
            /*{
                name: 'id_kain',
                tooltip: 'Field tidak boleh kosong',
                fieldLabel: 'ID Kain'
            },*/{
                name: 'nama_kain',
                tooltip: 'Field tidak boleh kosong',
                fieldLabel: 'Nama Kain'
            },{                
                name: 'id_jenis_kain',
                xtype:'combobox',
                fieldLabel: 'Jenis Kain',
                valueField: 'id_jenis_kain',
                displayField: 'nama_jenis_kain',
                store:'JenisKains',
                queryMode:'local',
                typeAhead:true 
            },{
                name: 'id_warna_pabrik',
                xtype:'combobox',
                fieldLabel: 'Warna Pabrik',
                valueField: 'id_warna_pabrik',
                displayField: 'id_warna_pabrik',
                store:'Warnas',
                queryMode:'local',
                typeAhead:true    
            },{
                name: 'stok',
                tooltip: 'Field tidak boleh kosong',
                fieldLabel: 'Stok'
            },{
                name: 'satuan',
                tooltip: 'Field tidak boleh kosong',
                fieldLabel: 'Satuan'
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
                tooltip: 'Field tidak boleh kosong',
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