Ext.define('CrudExt.view.bahanAnyam.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.bahanAnyamForm',
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
                        name: 'nama_plastik',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Nama Plastik'
                    },{
                        name: 'id_jenis_bahan_plastik',
                        xtype:'combobox',
                        fieldLabel: 'Jenis Bahan Plastik',
                        valueField: 'id_jenis_bahan_plastik',
                        displayField: 'nama_jenis_bahan_plastik',
                        store:'JenisBahanAnyams',
                        queryMode:'local',
                        typeAhead:true            
                    },{
                        name: 'lebar_plastik',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Lebar Plastik'
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
                        name: 'satuan_lebar_plastik',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Satuan Lebar'
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
                        name: 'harga',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Harga'
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