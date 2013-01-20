Ext.define('CrudExt.view.bahanMentahCushion.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.bahanMentahCushionForm',
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
                        name: 'id_bahan_mentah',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'ID Bahan Mentah',
                        readOnly:true
                    },*/
                    {
                        name: 'nama_bahan_mentah',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Nama Bahan Mentah'                      
                    },
                    {
                        name: 'id_jenis_bahan_mentah',
                        xtype:'combobox',
                        fieldLabel: 'Bahan Mentah',
                        valueField: 'id_jenis_bahan_mentah',
                        displayField: 'nama_jenis_bahan_mentah',
                        store:'JenisBahanMentahCushions',
                        queryMode:'local',
                        typeAhead:true                     
                    },
                    {
                        name: 'ukuran',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Ukuran'                      
                    },
                    {
                        name: 'satuan',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Satuan'                      
                    },
                    {
                        name: 'stok',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Stok'                      
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
                    },
                    {
                        name: 'remark',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'remark'                      
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