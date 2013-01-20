Ext.define('CrudExt.store.SuratKebutuhanBahanDetails',{
	extend		: 'Ext.data.Store',
	autoLoad	: true,
	autoSync	: false,
	storeId		: 'SuratKebutuhanBahanDetails',
	pageSize	: 20,
	model		: 'CrudExt.model.SuratKebutuhanBahanDetails',
	proxy		: {
		type: 'ajax',
		api: {
            create  : base_url + 'welcome/saveAll/surat_kebutuhan_bahan_detail/id_skb',
		    read    : base_url + 'welcome/getAll/surat_kebutuhan_bahan_detail',
		    update  : base_url + 'welcome/saveAll/surat_kebutuhan_bahan_detail/id_skb',
		    destroy : base_url + 'welcome/deleteAll/surat_kebutuhan_bahan_detail/id_skb'
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