Ext.define('CrudExt.view.epoxy.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.epoxyForm',
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
                        name: 'nama_epoxy',
                        tooltip: 'Field tidak boleh kosong',
                        fieldLabel: 'Nama Epoxy'                      
                    },{                        
                        name: 'id_jenis_epoxy',
                        xtype:'combobox',
                        fieldLabel: 'Jenis Epoxy',
                        valueField: 'id_jenis_epoxy',
                        displayField: 'nama_jenis_epoxy',
                        store:'KatEpoxys',
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