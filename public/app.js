Ext.Loader.setConfig({     
    enabled: true
});

Ext.application({
    name        : 'CrudExt',
    appFolder   : 'app',
    controllers : [ 'AcceptenceOrders','PropormaInvoices','OrderConfirmations','PurchaseOrders','PurchaseOrderDetails','LolosQCs','PenerimaanBarangs','Spks','Suppliers','KatSuppliers','Pengesubs','JenisPengesubs','JenisBahanMentahCushions','BahanMentahCushions',
                    'Busas','Items','KatItems','JenisAnyams', 'Warnas', 'KatWarnas','Aksesoris','KatAksesoris','Epoxys',
                    'KatEpoxys', 'Packings', 'JenisPackings', 'BahanAnyams', 'JenisBahanAnyams','Kains','JenisKains',
                    'Cushions', 'JenisCushions', 'Frames', 'JenisFrames', 'PurchaseOrders','RekapitulasiAnggarans','SuratKebutuhanBahans','SuratPengambilanBahans' ],
    launch: function() {
        var storeMaster = Ext.create('Ext.data.TreeStore', {
        root    : {
            children : [{
                text    : 'Data Supplier',
                iconCls : 'icon-page_edit',
                leaf : false,
                children    : [
                {
                    text    : 'Supplier',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrSuplier',
                    leaf    : true
                },{
                    text    : 'Kategori Supplier',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrKatSupplier',
                    leaf    : true
                }
            ]},{
                text    : 'Data Cushion',
                iconCls : 'icon-page_edit',
                id      : 'mnMstrDataCushion',
                leaf : false,
                children    : [
                {
                    text    : 'Jenis Bahan Mentah',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrJnsBahanMentahCushion',
                    leaf    : true
                },{
                    text    : 'Bahan Mentah',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrBahanMentahCushion',
                    leaf    : true
                },{
                    text    : 'Busa',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrBusa',
                    leaf    : true
                },{
                    text    : 'Jenis Cover',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrJnsCover',
                    leaf    : true
                },{
                    text    : 'Cover Cushion',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrCoverCushion',
                    leaf    : true
                },{
                    text    : 'Cushion',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrCushion',
                    leaf    : true
                },{
                    text    : 'Jenis Cushion',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrJnsCushion',
                    leaf    : true
                }
            ]},{
                text    : 'Data Items',
                iconCls : 'icon-page_edit',
                id      : 'mnMstrDataItems',
                leaf : false,
                children    : [
                {
                    text    : 'Items',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrItems',
                    leaf    : true
                },{
                    text    : 'Kategori Items',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrKatItems',
                    leaf    : true
                }
            ]},{
                text    : 'Data Pengesub',
                iconCls : 'icon-page_edit',
                id      : 'mnMstrDataPengesub',
                leaf : false,
                children    : [
                {
                    text    : 'Pengesub',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrPengesub',
                    leaf    : true
                },{
                    text    : 'Kategori Pengesub',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrKatPengesub',
                    leaf    : true
                }
            ]},{
                text    : 'Data Anyam',
                iconCls : 'icon-page_edit',
                leaf : false,
                children    : [
                {
                    text    : 'Jenis Anyam',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrJenisAnyam',
                    leaf    : true
                },{
                    text    : 'Bahan Anyam',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrJenisBahanBaku',
                    leaf    : true
                },{
                    text    : 'Jenis Bahan Anyam',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrBahanBakuAnyam',
                    leaf    : true
                }
            ]},{
                text    : 'Data Warna',
                iconCls : 'icon-page_edit',
                leaf : false,
                children    : [
                {
                    text    : 'Warna',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrWarna',
                    leaf    : true
                },{
                    text    : 'Kategori Warna',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrKatWarna',
                    leaf    : true
                }
            ]},{
                text    : 'Data Aksesoris',
                iconCls : 'icon-page_edit',
                leaf : false,
                children    : [
                {
                    text    : 'Aksesoris',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrAksesoris',
                    leaf    : true
                },{
                    text    : 'Kategori Aksesoris',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrKatAksesoris',
                    leaf    : true
                }
            ]},{
                text    : 'Data Epoxy',
                iconCls : 'icon-page_edit',
                leaf : false,
                children    : [
                {
                    text    : 'Epoxy',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrEpoxy',
                    leaf    : true
                },{
                    text    : 'Kategori Epoxy',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrKatEpoxy',
                    leaf    : true
                }
            ]},{
                text    : 'Data Packing',
                iconCls : 'icon-page_edit',
                leaf : false,
                children    : [
                {
                    text    : 'Packing',
                    //iconCls : 'icon-page_edit',
                    id      : 'mnMstrPacking',
                    leaf    : true
                },{
                    text    : 'Kategori Packing',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrKatPacking',
                    leaf    : true
                }
            ]},{
                text    : 'Data Frame',
                iconCls : 'icon-page_edit',
                leaf : false,
                children    : [                
                {
                    text    : 'Jenis Frame',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrJenisFrame',
                    leaf    : true
                },{
                    text    : 'Detail Frame',
                    //iconCls : 'icon-bookmark',
                    id      : 'mnMstrDetailFrame',
                    leaf    : true
                }
            ]}
        ]
        }
    });
    var menuMaster  = Ext.create('Ext.tree.Panel', {
        store       : storeMaster,
        autoScroll  : true,
        border      : false,
        rootVisible : false,
        useArrows   : true
    });
    /**
     * End of Menu Master
     **/
    
    /**
     * Start Menu Transaksi
     **/
    var storeTransaksi = Ext.create('Ext.data.TreeStore', {
        root    : {
            expanded    : true,
            children    : [
                {
                    text    : 'Acceptence Order (Sales Support)',
                    //iconCls : 'icon-clipboard',
                    id      : 'mnAccOrder',
                    leaf    : true
                },{
                    text    : 'Performa Invoice (PPIC)',
                    //iconCls : 'icon-folder_page',
                    id      : 'mnPerformaInvoice',
                    leaf    : true
                    
                },{
                    text    : 'Order Confirmation (PPIC)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnOrderConfirmation',
                    leaf    : true
                },{
                    text    : 'Data Kebutuhan (PPIC)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnDataKebutuhan',
                    leaf    : true
                },{
                    text    : 'Purchasing Order (Purchasing)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnPurchasingOrder',
                    leaf    : true
                },{
                    text    : 'Penerimaan Barang (Purchasing)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnPenerimaanBarang',
                    leaf    : true
                },{
                    text    : 'Tukar Faktur (Keuangan)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnTukarFaktur',
                    leaf    : true
                },{
                    text    : 'Voucher (Keuangan)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnVoucher',
                    leaf    : true
                },{
                    text    : 'Realisasi Pengeluaran Uang (Keuangan)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnRealisasiPengeluaran',
                    leaf    : true
                },{
                    text    : 'SPK Rangka',
                    //iconCls : 'icon-email_star',
                    id      : 'mnSpkRangka',
                    leaf    : true
                },{
                    text    : 'SPK Anyam dll',
                    //iconCls : 'icon-email_star',
                    id      : 'mnSpkAnyam',
                    leaf    : true
                },{
                    text    : 'Data Lolos QC (QC)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnDataLolosQC',
                    leaf    : true
                },{
                    text    : 'Data Lolos Harian (Kep Produksi)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnDataLolosHarian',
                    leaf    : true
                },{
                    text    : 'Rekapitulasi Anggaran (PPIC)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnRekapitulasiAnggaran',
                    leaf    : true
                },{
                    text    : 'Permintaan Bahan (PPIC)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnPermintaanBahan',
                    leaf    : true
                },{
                    text    : 'Pengambilan Bahan (Gudang)',
                    //iconCls : 'icon-email_star',
                    id      : 'mnPengambilanBahan',
                    leaf    : true
                }
            ]
        }
    });
    var menuTransaksi  = Ext.create('Ext.tree.Panel', {
        store       : storeTransaksi,
        rootVisible : false,
        border      : false,
        autoScroll  : true,
        useArrows   : true
    });
    /**
     * End of Menu Transaksi
     **/

    /**
     * Start Menu Report
     **/
    var storeReport = Ext.create('Ext.data.TreeStore', {
        root    : {
            expanded    : true,
            children    : [
                {
                    text    : 'Report Data Chusion',
                    iconCls : 'icon-clipboard',
                    id      : 'mnRptReportChusion',
                    leaf    : true
                },
                {
                    text    : 'Report Data Items',
                    iconCls : 'icon-folder_page',
                    id      : 'mnRptDataItems',
                    leaf    : true
                    
                },
                {
                    text    : 'Report Data Customer',
                    iconCls : 'icon-email_star',
                    id      : 'mnRptCustomer',
                    leaf    : true
                }
            ]
        }
    });
    var menuReport  = Ext.create('Ext.tree.Panel', {
        store       : storeReport,
        rootVisible : false,
        border      : false,
        autoScroll  : true,
        useArrows   : true
    });
    /**
     * End of Menu Report
     **/

    
    /**
     * Start Menu Utilities
     **/
    var storeUtilities  = Ext.create('Ext.data.TreeStore', {
        root    : {
            expanded    : true,
            children    : [
                {
                    text    : 'Export Database',
                    iconCls : 'icon-database_copy',
                    id      : 'mnUtlsExportDatabase',
                    leaf    : true
                },
                {
                    text    : 'Import Database',
                    iconCls : 'icon-database_refresh',
                    id      : 'mnUtlsImportDatabase',
                    leaf    : true
                },
                {
                    text    : 'Maintenance Database',
                    iconCls : 'icon-email_edit',
                    id      : 'mnUtlsMaintenance',
                    leaf    : true
                }
            ]
        }
    });
    var menuUtilities   = Ext.create('Ext.tree.Panel', {
        store       : storeUtilities,
        autoScroll  : true,
        border      : false,
        rootVisible : false,
        useArrows   : true
    });
    /**
     * End of Menu Utilities
     **/
    
    /**
     * Start Menu Panel
     **/
    var mnMenu  = Ext.create('Ext.panel.Panel', {
        id          : 'mnMenu',
        region      : 'west',
        title       : 'Main Menu',
        split       : true,
        collapsible : true,
        iconCls     : 'icon-monitor',
        width       : 197,
        layout      : {
            type        : 'accordion',
            animate : true
        },
        xtype       : 'panel',
        margins     : '5px 0px 5px 5px',
        border      : true,
        frame       : false,
        items       : [
            {
                xtype   : 'panel',
                id      : 'menuMaster',
                title   : 'Master',
                layout  : 'fit',
                iconCls : 'icon-book',
                items   : [menuMaster]
            },{
                xtype   : 'panel',
                id      : 'menuTransaksi',
                title   : 'Transaksi',
                layout  : 'fit',
                iconCls : 'icon-book',
                items   : [menuTransaksi]
            },{
                xtype   : 'panel',
                id      : 'menuReport',
                title   : 'Report',
                layout  : 'fit',
                iconCls : 'icon-report',
                items   : [menuReport]
            },{
                xtype   : 'panel',
                id      : 'menuUtilities',
                title   : 'Utilities',
                layout  : 'fit',
                iconCls : 'icon-laptop_key',
                items   : [menuUtilities]
            }
        ],
        tbar        : [
            {
                text        : 'USERNAME',
                id          : 'supplier',
                iconCls     : 'icon-user_b',
                handler     : function(elRef){
                    Ext.MessageBox.alert('Login As', elRef.text);
                }
            },
            '->',
            {
                text        : 'Logout',
                id          : 'logout',
                iconCls     : 'icon-book_go',
                handler     : function(){
                    window.location = BASE_URL + 'home/logout';
                }
            }
        ]
    });
    /**
     * End Of Menu Panel
     **/
    
    /**
     * Start Main Container
     **/
    var mnContainer = Ext.create('Ext.panel.Panel', {
        id          : 'mnContainer',        
        layout      : 'fit',
        items       : [
            Ext.create('CrudExt.view.supplier.Grid')
        ]
    });

    var mnKatSupplier = Ext.create('Ext.panel.Panel', {
        id          : 'mnKatSupplier',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.katsupplier.Grid')
        ]
    });    

    var mnPengesub = Ext.create('Ext.panel.Panel', {
        id          : 'mnPengesub',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.pengesub.Grid')
        ]
    });

    var mnJenisPengesub = Ext.create('Ext.panel.Panel', {
        id          : 'mnJenisPengesub',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.jenisPengesub.Grid')
        ]
    });

    var mnJenisBahanMentahCushion = Ext.create('Ext.panel.Panel', {
        id          : 'mnJenisBahanMentahCushion',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.jenisBahanMentahCushion.Grid')
        ]
    });

    var mnBahanMentahCushion = Ext.create('Ext.panel.Panel', {
        id          : 'mnBahanMentahCushion',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.bahanMentahCushion.Grid')
        ]
    });

    var mnBusa = Ext.create('Ext.panel.Panel', {
        id          : 'mnBusa',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.busa.Grid')
        ]
    });

    var mnItem = Ext.create('Ext.panel.Panel', {
        id          : 'mnItem',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.item.Grid')
        ]
    });

    var mnKatItem = Ext.create('Ext.panel.Panel', {
        id          : 'mnKatItem',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.katItem.Grid')
        ]
    });

    var mnJenisAnyam = Ext.create('Ext.panel.Panel', {
        id          : 'mnJenisAnyam',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.jenisAnyam.Grid')
        ]
    });

    var mnWarna = Ext.create('Ext.panel.Panel', {
        id          : 'mnWarna',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.warna.Grid')
        ]
    });

    var mnKatWarna = Ext.create('Ext.panel.Panel', {
        id          : 'mnKatWarna',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.katWarna.Grid')
        ]
    });

    var mnAksesoris = Ext.create('Ext.panel.Panel', {
        id          : 'mnAksesoris',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.aksesoris.Grid')
        ]
    });

    var mnKatAksesoris = Ext.create('Ext.panel.Panel', {
        id          : 'mnKatAksesoris',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.katAksesoris.Grid')
        ]
    });

    var mnEpoxy= Ext.create('Ext.panel.Panel', {
        id          : 'mnEpoxy',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.epoxy.Grid')
        ]
    });

    var mnKatEpoxy = Ext.create('Ext.panel.Panel', {
        id          : 'mnKatEpoxy',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.katEpoxy.Grid')
        ]
    });

    var mnPacking = Ext.create('Ext.panel.Panel', {
        id          : 'mnPacking',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.packing.Grid')
        ]
    });

    var mnJenisPacking = Ext.create('Ext.panel.Panel', {
        id          : 'mnJenisPacking',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.jenisPacking.Grid')
        ]
    });

    var mnBahanAnyams = Ext.create('Ext.panel.Panel', {
        id          : 'mnBahanAnyams',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.bahanAnyam.Grid')
        ]
    });

    var mnJenisBahanAnyam = Ext.create('Ext.panel.Panel', {
        id          : 'mnJenisBahanAnyam',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.jenisBahanAnyam.Grid')
        ]
    });

    var mnKain = Ext.create('Ext.panel.Panel', {
        id          : 'mnKain',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.kain.Grid')
        ]
    });

    var mnJenisKain = Ext.create('Ext.panel.Panel', {
        id          : 'mnJenisKain',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.jeniskain.Grid')
        ]
    });

    var mnCushion = Ext.create('Ext.panel.Panel', {
        id          : 'mnCushion',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.cushion.Grid')
        ]
    });

    var mnJenisCushion = Ext.create('Ext.panel.Panel', {
        id          : 'mnJenisCushion',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.jnscushion.Grid')
        ]
    });

    var mnFrame = Ext.create('Ext.panel.Panel', {
        id          : 'mnFrame',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.frame.Grid')
        ]
    });

    var mnJenisFrame = Ext.create('Ext.panel.Panel', {
        id          : 'mnJenisFrame',        
        layout      : 'fit',    
        items       : [
            Ext.create('CrudExt.view.jenisFrame.Grid')
        ]
    });

    var mnPerformaInvoice = Ext.create('Ext.panel.Panel', {
        id          : 'mnPerformaInvoice',
        title       : 'Performa Invoice',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Properties',
            region:'west',
            collapsible: false,
            margins: '5 0 0 0',
            cmargins: '5 5 0 0',
            width: 260,
            minSize: 100,
            maxSize: 250,                    
            items : [                
                Ext.create('CrudExt.view.performaInvoice.Form')
            ]
        },{
            title: 'Report Viewer',
            collapsible: false,
            region:'center',
            margins: '5 0 0 0',            
            layout: 'fit',            
            html : "<iframe src='http://localhost/bohdeline/public/index.php/welcome/pi' width='100%' height='100%'></iframe>"
        }]        
    });

    var mnOrderConfirmation = Ext.create('Ext.panel.Panel', {
        id          : 'mnOrderConfirmation',
        title       : 'Order Confirmation',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Properties',
            region:'west',
            collapsible: false,
            margins: '5 0 0 0',
            cmargins: '5 5 0 0',
            width: 260,
            minSize: 100,
            maxSize: 250,                    
            items : [                
                Ext.create('CrudExt.view.orderConfirmation.Form')
            ]
        },{
            title: 'Report Viewer',
            collapsible: false,
            region:'center',
            margins: '5 0 0 0',            
            layout: 'fit',            
            html : "<iframe src='http://localhost/bohdeline/public/index.php/welcome/oc' width='100%' height='100%'></iframe>"
        }]        
    });

    var mnDataKebutuhan = Ext.create('Ext.panel.Panel', {
        id          : 'mnDataKebutuhan',
        title       : 'Data Kebutuhan',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Properties',
            region:'west',
            collapsible: false,
            margins: '5 0 0 0',
            cmargins: '5 5 0 0',
            width: 260,
            minSize: 100,
            maxSize: 250,                    
            items : [                
                Ext.create('CrudExt.view.dataKebutuhan.Form')
            ]
        },{
            title: 'Report Viewer',
            collapsible: false,
            region:'center',
            margins: '5 0 0 0',            
            layout: 'fit',            
            html : "<iframe src='http://localhost/bohdeline/public/index.php/welcome/dataKebutuhan' width='100%' height='100%'></iframe>"
        }]        
    });

    var mnPenerimaanBarang = Ext.create('Ext.panel.Panel', {
        id          : 'mnPenerimaanBarang',
        title       : 'Penerimaan Barang',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data Penerimaan Barang',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.penerimaanBarang.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.penerimaanBarang.Form')
            ]         
        }]   
    });

    var mnPurchasingOrder = Ext.create('Ext.panel.Panel', {
        id          : 'mnPurchasingOrder',
        title       : 'Purchasing Order',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data Purchasing Order',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.purchasingOrder.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.purchasingOrder.Form')
            ]         
        }]   
    });

    var mnPurchasingOrder = Ext.create('Ext.panel.Panel', {
        id          : 'mnPurchasingOrder',
        title       : 'Purchasing Order',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data Purchasing Order',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.purchasingOrder.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.purchasingOrder.Form')
            ]         
        }]   
    });

    var mnTukarFaktur = Ext.create('Ext.panel.Panel', {
        id          : 'mnTukarFaktur',
        title       : 'Tukar Faktur',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data Tukar Faktur',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.tukarFaktur.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.tukarFaktur.Form')
            ]         
        }]   
    });

    var mnVoucher = Ext.create('Ext.panel.Panel', {
        id          : 'mnVoucher',
        title       : 'Voucher',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Properties',
            region:'west',
            collapsible: false,
            margins: '5 0 0 0',
            cmargins: '5 5 0 0',
            width: 260,
            minSize: 100,
            maxSize: 250,                    
            items : [                
                Ext.create('CrudExt.view.voucher.Form')
            ]
        },{
            title: 'Report Viewer',
            collapsible: false,
            region:'center',
            margins: '5 0 0 0',            
            layout: 'fit',            
            html : "<iframe src='http://localhost/bohdeline/public/index.php/welcome/voucher' width='100%' height='100%'></iframe>"
        }]        
    });

    var mnRealisasiPengeluaran = Ext.create('Ext.panel.Panel', {
        id          : 'mnRealisasiPengeluaran',
        title       : 'Realisasi Pengeluaran',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Properties',
            region:'west',
            collapsible: false,
            margins: '5 0 0 0',
            cmargins: '5 5 0 0',
            width: 260,
            minSize: 100,
            maxSize: 250,                    
            items : [                
                Ext.create('CrudExt.view.realisasiPengeluaran.Form')
            ]
        },{
            title: 'Report Viewer',
            collapsible: false,
            region:'center',
            margins: '5 0 0 0',            
            layout: 'fit',            
            html : "<iframe src='http://localhost/test.php' width='100%' height='100%'></iframe>"
        }]        
    });

    var mnPengambilanBahan = Ext.create('Ext.panel.Panel', {
        id          : 'mnPengambilanBahan',
        title       : 'Pengambilan Bahan',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data Pengambilan Bahan',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.pengambilanBahan.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.pengambilanBahan.Form')
            ]         
        }]   
    });

    var mnPermintaanBahan = Ext.create('Ext.panel.Panel', {
        id          : 'mnPermintaanBahan',
        title       : 'Permintaan Bahan',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data Permintaan Bahan',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.permintaanBahan.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.permintaanBahan.Form')
            ]         
        }]   
    });

    var mnRekapitulasiAnggaran = Ext.create('Ext.panel.Panel', {
        id          : 'mnRekapitulasiAnggaran',
        title       : 'Rekapitulasi Anggaran',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data Rekapitulasi Anggaran',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.rekapitulasiAnggaran.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.rekapitulasiAnggaran.Form')
            ]         
        }]   
    });

    var mnDataLolosHarian = Ext.create('Ext.panel.Panel', {
        id          : 'mnDataLolosHarian',
        title       : 'Data Lolos Harian',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Properties',
            region:'west',
            collapsible: false,
            margins: '5 0 0 0',
            cmargins: '5 5 0 0',
            width: 260,
            minSize: 100,
            maxSize: 250,                    
            items : [                
                Ext.create('CrudExt.view.dataLolosHarian.Form')
            ]
        },{
            title: 'Report Viewer',
            collapsible: false,
            region:'center',
            margins: '5 0 0 0',            
            layout: 'fit',            
            html : "<iframe src='http://localhost/sanboxs/index.php' width='100%' height='100%'></iframe>"
        }]        
    });

    var mnDataLolosQC = Ext.create('Ext.panel.Panel', {
        id          : 'mnDataLolosQC',
        title       : 'Data Lolos QC',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data Lolos QC',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.dataLolosQc.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.dataLolosQc.Form')
            ]         
        }]   
    });

    var mnSpkAnyam = Ext.create('Ext.panel.Panel', {
        id          : 'mnSpkAnyam',
        title       : 'SPK Anyam',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data SPK Anyam',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.spkAnyam.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.spkAnyam.Form')
            ]         
        }]   
    });

    var mnSpkRangka = Ext.create('Ext.panel.Panel', {
        id          : 'mnSpkRangka',
        title       : 'SPK Rangka',
        layout      : 'border',
        defaults    : {
            collapsible: true,
            split: true,
            bodyStyle : 'padding:15px'
        },   
        items: [{
            title: 'Data SPK Rangka',
            region: 'south',
            height: 150,
            minSize: 75,
            maxSize: 250,
            cmargins: '5 0 0 0',
            items : [                
                Ext.create('CrudExt.view.spkRangka.Grid')
            ]
        },{            
            collapsible: false,
            region:'center',  
            border: 'none',
            items : [                
                Ext.create('CrudExt.view.spkRangka.Form')
            ]         
        }]   
    });



    var card = new Ext.Panel({
        margins     : '5px 5px 5px 0px',
        bodyStyle   : 'background : #D3E1F1',
        xtype       : 'box',
        region      : 'center',
        layout:'card',
        activeItem:0,
        items:[ mnContainer , mnKatSupplier, mnPengesub, mnJenisPengesub, mnJenisBahanMentahCushion, mnBahanMentahCushion,
                mnBusa, mnItem, mnKatItem, mnJenisAnyam, mnWarna, mnKatWarna, mnAksesoris ,mnKatAksesoris, mnEpoxy, mnKatEpoxy, 
                mnPacking, mnJenisPacking, mnBahanAnyams, mnJenisBahanAnyam, mnKain, mnJenisKain, mnCushion, mnJenisCushion,
                mnFrame, mnJenisFrame, mnPerformaInvoice, mnOrderConfirmation, mnDataKebutuhan, mnPurchasingOrder, mnPenerimaanBarang,
                mnTukarFaktur, mnVoucher, mnRealisasiPengeluaran, mnPengambilanBahan, mnPermintaanBahan, mnRekapitulasiAnggaran,
                mnDataLolosHarian, mnDataLolosQC, mnSpkAnyam, mnSpkRangka ]
    });

    
    /**
     * End of Main Container
     **/
    
    /**
     * Start View Port
     **/
    Ext.create('Ext.container.Viewport', {
        layout      : 'border',
        xtype       : 'panel',
        id          : 'viewPort',
        defaults    : {
            frame   : true,
            border  : true
        },
        border      : true,
        items       : [
            {
                xtype   : 'box',
                layout  : 'fit',
                height  : 47,
                id      : 'appHeader',
                region  : 'north',
                html    : 'Sistem Manufacturing Bohde'
            },
            mnMenu,card,
            {
                xtype   : 'panel',
                layout  : 'hbox',
                border  : false,
                frame   : false,
                height  : 27,
                id      : 'appFooter',
                region  : 'south',
                bbar    : [
                    '->',
                    {
                        text        : 'Sistem Manufacturing Bohde &copy; Copyright 2012',
                        disabled    : true
                    },
                    '-',
                    {
                        text        : 'Developed By :',
                        disabled    : true
                    },
                    {
                        text        : 'iTea Media Solution',
                        handler     : function(){
                            showAbout();
                        }
                    },
                    '-',
                    {
                        id          : 'dateStatus',
                        text        : '01-01-1970',
                        disabled    : true
                    },'-',
                    {
                        id          : 'timeStatus',
                        disabled    : true,
                        text        : '00:00:00'
                    }
                ]
            }
        ]
    });    
    /**
     * End of View Port
     **/
    
    /**
     * Menu Listener
     **/            


    var showAbout = function() {
        var htmlAbout = '<div id="about-title">Application v0.1</div>';
        htmlAbout += '<div id="about-content">brief description about the application</div>'
        
        var windowAbout = new Ext.Window({
            title: 'About Application',
            closable:true,
            resizable: false,
            width:250,
            height:150,
            border: false,
            plain:true,
            layout: 'fit',
            padding: '3',
            html: htmlAbout,
            items: []
        });
        
        windowAbout.show(this);
    };    

    /*function clearExtjsComponent(cmp) {
        var f;
        while(f = cmp.items.first()){
            cmp.remove(f, true);
        }
    }

    function replaceComponentContent(cmpParent, cmpContent) {
        clearExtjsComponent(cmpParent);
        cmpParent.add(cmpContent);
        cmpParent.doLayout();
    }*/

    menuMaster.getSelectionModel().on('select', function(selModel, elRef) {
        var selected    = elRef.get('id');
        switch(selected){
            case    'mnMstrSuplier' :  
                card.getLayout().setActiveItem(0);
            break;
            case    'mnMstrKatSupplier' :
                card.getLayout().setActiveItem(1);
            break;
            case    'mnMstrJnsBahanMentahCushion' :
                card.getLayout().setActiveItem(4);
            break;
            case    'mnMstrBahanMentahCushion' :
                card.getLayout().setActiveItem(5);
            break;
            case    'mnMstrBusa' :
                card.getLayout().setActiveItem(6);
            break;
            case    'mnMstrJnsCover' :
                card.getLayout().setActiveItem(21);
            break;
            case    'mnMstrCoverCushion' :
                card.getLayout().setActiveItem(20);
            break;
            case    'mnMstrCushion' :
                card.getLayout().setActiveItem(22);
            break;
            case    'mnMstrJnsCushion' :
                card.getLayout().setActiveItem(23);
            break;
            case    'mnMstrItems' :
                card.getLayout().setActiveItem(7);
            break;
            case    'mnMstrKatItems' :
                card.getLayout().setActiveItem(8);
            break;
            case    'mnMstrPengesub' :
                card.getLayout().setActiveItem(2);
            break;
            case    'mnMstrKatPengesub' :
                card.getLayout().setActiveItem(3);
            break;
            case    'mnMstrJenisAnyam' :
                card.getLayout().setActiveItem(9);
            break;
            case    'mnMstrJenisBahanBaku' :
                card.getLayout().setActiveItem(18);
            break;
            case    'mnMstrBahanBakuAnyam' :
                card.getLayout().setActiveItem(19);
            break;
            case    'mnMstrWarna' :
                card.getLayout().setActiveItem(10);
            break;
            case    'mnMstrKatWarna' :
                card.getLayout().setActiveItem(11);
            break;
            case    'mnMstrAksesoris' :
                card.getLayout().setActiveItem(12);
            break;
            case    'mnMstrKatAksesoris' :
                card.getLayout().setActiveItem(13);
            break;
            case    'mnMstrEpoxy' :
                card.getLayout().setActiveItem(14);
            break;
            case    'mnMstrKatEpoxy' :
                card.getLayout().setActiveItem(15);
            break;
            case    'mnMstrPacking' :
                card.getLayout().setActiveItem(16);
            break;
            case    'mnMstrKatPacking' :
                card.getLayout().setActiveItem(17);
            break;            
            case    'mnMstrJenisFrame' :
                card.getLayout().setActiveItem(25);
            break;
            case    'mnMstrDetailFrame' :
                card.getLayout().setActiveItem(24);
            break;
        }
    });
    menuTransaksi.getSelectionModel().on('select', function(selModel, elRef) {
        var selected    = elRef.get('id');
        switch(selected){
            case    'mnPerformaInvoice' :
                card.getLayout().setActiveItem(26);                
            break;            
            case    'mnOrderConfirmation' :
                card.getLayout().setActiveItem(27);
            break;
            case    'mnDataKebutuhan' :
                card.getLayout().setActiveItem(28);
            break;
            case    'mnPurchasingOrder' :
                card.getLayout().setActiveItem(29);
            break;            
            case    'mnPenerimaanBarang' :
                card.getLayout().setActiveItem(30);
            break; 
            case    'mnTukarFaktur' :
                card.getLayout().setActiveItem(31);
            break;
            case    'mnVoucher' :
                card.getLayout().setActiveItem(32);
            break;
            case    'mnRealisasiPengeluaran' :
                card.getLayout().setActiveItem(33);
            break;
            case    'mnPengambilanBahan' :
                card.getLayout().setActiveItem(34);
            break;
            case    'mnPermintaanBahan' :
                card.getLayout().setActiveItem(35);
            break;
            case    'mnRekapitulasiAnggaran' :
                card.getLayout().setActiveItem(36);
            break;
            case    'mnDataLolosHarian' :
                card.getLayout().setActiveItem(37);
            break;
            case    'mnDataLolosQC' :
                card.getLayout().setActiveItem(38);
            break;
            case    'mnSpkAnyam' :
                card.getLayout().setActiveItem(39);
            break;
            case    'mnSpkRangka' :
                card.getLayout().setActiveItem(40);
            break;
        }
    });
    menuReport.getSelectionModel().on('select', function(selModel, elRef) {
        var selected    = elRef.get('id');
        switch(selected){
            case    'mnRptDataChusion' :
                
            break;
            case    'mnRptDataItems' :
                
            break;
            case    'mnRptDataCustomer' :
                
            break;
        }
    });
    menuUtilities.getSelectionModel().on('select', function(selModel, elRef) {
        var selected    = elRef.get('id');
        switch(selected){
            case    'mnUtlsExportDatabase' :
                
            break;
            case    'mnUtlsImportDatabase' :
                
            break;
            case    'mnUtlsMaintenanceDatabase' :
                
            break;
        }
    });
    /**
     * End of Menu Listerner
     **/
    }
});