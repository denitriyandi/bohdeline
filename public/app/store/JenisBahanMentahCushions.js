Ext.define('CrudExt.store.JenisBahanMentahCushions',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'JenisBahanMentahCushions',
	pageSize	: 20,
	model		: 'CrudExt.model.JenisBahanMentahCushions',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/jenis_bahan_mentah_cushion/id_jenis_bahan_mentah',
		    read    : base_url + 'welcome/getAll/jenis_bahan_mentah_cushion',
		    update  : base_url + 'welcome/saveAll/jenis_bahan_mentah_cushion/id_jenis_bahan_mentah',
		    destroy : base_url + 'welcome/deleteAll/jenis_bahan_mentah_cushion/id_jenis_bahan_mentah'
		},
		actionMethods: {
            create  : 'POST',
		    read    : 'POST',
		    update  : 'POST',
		    destroy : 'POST'
		},
		reader: {
                    type            : 'json',
                    root            : 'data',
                    rootProperty    : 'data',
                    successProperty : 'success',
                    messageProperty : 'message'
		},
		writer: {
                    type            : 'json',
                    writeAllFields  : true,
                    root            : 'data',
                    encode          : true
		},
        listeners: {
            
        }
	}  
});