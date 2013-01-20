Ext.define('CrudExt.view.aksesoris.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.aksesorisForm',
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
        this.items = [  { 
                        name: 'nama_acc',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Nama Aksesoris'                      
                    },{                        
                        name: 'id_kategori_acc',
                        xtype:'combobox',
                        fieldLabel: 'Kategori Aksesoris',
                        valueField: 'id_kategori_acc',
                        displayField: 'nama_kategori',
                        store:'KatAksesoris',
                        queryMode:'local',
                        typeAhead:true
                    },{
                        name: 'id_warna_pabrik',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'ID Warna Pabrik'                      
                    },{
                        name: 'ukuran',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Ukuran'                      
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
                        name: 'stok',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Stok'                      
                    },{
                        name: 'harga_jual',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Harga Jual'                      
                    },{
                        name: 'harga_beli',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Harga Beli'                      
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