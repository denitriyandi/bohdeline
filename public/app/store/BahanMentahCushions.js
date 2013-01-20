Ext.define('CrudExt.store.BahanMentahCushions',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'BahanMentahCushions',
	pageSize	: 20,
	model		: 'CrudExt.model.BahanMentahCushions',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/bahan_mentah_cushion/id_bahan_mentah',
		    read    : base_url + 'welcome/getAll/bahan_mentah_cushion',
		    update  : base_url + 'welcome/saveAll/bahan_mentah_cushion/id_bahan_mentah',
		    destroy : base_url + 'welcome/deleteAll/bahan_mentah_cushion/id_bahan_mentah'
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