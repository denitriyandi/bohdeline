Ext.define('CrudExt.view.frame.Form', {
    extend          : 'Ext.form.Panel',
    alias           : 'widget.frameForm',
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
                name: 'nama_pipa',
                tooltip: 'Field tidak boleh kosong',
                fieldLabel: 'Nama Pipa'
            },{
                name: 'id_jenis_pipa',
                xtype:'combobox',
                fieldLabel: 'Jenis Pipa',
                valueField: 'id_jenis_pipa',
                displayField: 'bahan',
                store:'JenisFrames',
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
                name: 'ukuran',
                tooltip: 'Field tidak boleh kosong',
                fieldLabel: 'Ukuran'
            },{
                name: 'ketebalan',
                tooltip: 'Field tidak boleh kosong',
                fieldLabel: 'Ketebalan'
            },{
                name: 'diameter',
                tooltip: 'Field tidak boleh kosong',
                fieldLabel: 'Diameter'
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