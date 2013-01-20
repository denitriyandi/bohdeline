Ext.define('CrudExt.view.supplier.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.supplierForm',
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
                        name: 'id_supplier',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'ID Supplier',
                        //readOnly:true
                    },*/
                    {
                        name: 'nama_supplier',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Nama Supplier'                      
                    },
                    {
                        name: 'id_kategori_supplier',
                        xtype:'combobox',
                        fieldLabel: 'Kategori Supplier',
                        valueField: 'id_kategori_supplier',
                        displayField: 'nama_kategori_supplier',
                        store:'KatSuppliers',
                        queryMode:'local',
                        typeAhead:true  
                    },
                    {
                        name: 'alamat',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'alamat',                        
                    },
                    {
                        name: 'telp',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'telp'                        
                    },
                    {
                        name: 'Hp',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Hp'                        
                    },
                    {
                        name: 'Fax',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Fax'                        
                    },
                    {
                        name: 'No_rek',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'No_rek'                        
                    },
                    {
                        name: 'email',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'email', 
                        vtype: 'email'                        
                    },
                    {
                        name: 'keterangan',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'keterangan'                      
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