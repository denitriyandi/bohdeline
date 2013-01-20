Ext.define('CrudExt.view.cushion.Form', {
	extend          : 'Ext.form.Panel',
    alias           : 'widget.cushionForm',
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
            {                
                name: 'id_busa',
                xtype:'combobox',
                fieldLabel: 'Busa',
                valueField: 'id_busa',
                displayField: 'nama_busa',
                store:'Busas',
                queryMode:'local',
                typeAhead:true  
            },{                
                name: 'id_kain',
                xtype:'combobox',
                fieldLabel: 'Cover',
                valueField: 'id_kain',
                displayField: 'nama_kain',
                store:'Kains',
                queryMode:'local',
                typeAhead:true  
            },{                
                name: 'id_jenis_cushion',
                xtype:'combobox',
                fieldLabel: 'Jenis Cushion',
                valueField: 'id_jenis_cushion',
                displayField: 'nama_jenis_cushion',
                store:'JenisCushions',
                queryMode:'local',
                typeAhead:true   
            },{
                name : 'nama_cushion',
                tooltip : 'Field tidak boleh kosong',
                fieldLabel : 'Nama Cushion'
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