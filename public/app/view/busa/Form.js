Ext.define('CrudExt.view.busa.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.busaForm',
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
                        name: 'nama_busa',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Nama Busa'                      
                    },
                    {
                        name: 'warna', // Belum Jelas
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Warna'                      
                    },
                    {
                        name: 'dimensi',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Dimensi'                      
                    },
                    {
                        name: 'satuan_dimensi',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Satuan Dimensi'                      
                    },
                    {
                        name: 'density',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Density'                      
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