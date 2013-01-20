<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends MX_Controller {
    
        public function __construct() {
            parent::__construct();
        }

        public function index()
        {
                $this->load->view('welcome_message');
        }

        public function getAll($table)
        {
            $start  =   ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
            $page   =   ($this->input->post('page', TRUE) ? $this->input->post('page', TRUE) : 1);
            $limit  =   ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 10);
            
            $query  = $this->db->limit($limit, $start)->get($table)->result();
            $total  = $this->db->get($table)->num_rows();
            
            $data   = array();
            foreach($query as $result){
                $data[] = $result;
            }
            
            $json   = array(
                'success'   => TRUE,
                'message'   => "Loaded data",
                'total'     => $total,
                'data'      => $data
            );
            
            echo json_encode($json);
        }

        public function getLastID($tabel,$id,$lkode,$kode){
            //GET Last ID
            $query = $this->db->limit(1,0)->order_by($id,"DESC")->get($tabel)->result();
           
            
            if($lkode==2){
                foreach($query as $result){
                    $LastID = substr($result->$id,3,$kode+1);
                }
            }elseif($lkode==3){
                foreach($query as $result){
                    $LastID = substr($result->$id,4,$kode+1);
                }
            }elseif($lkode==4){
                foreach($query as $result){
                    $LastID = substr($result->$id,5,$kode+1);
                }
            }
            if($kode==1){
                if($LastID<10){
                    $lKode = $LastID+1;
                    return "0".$lKode;
                }elseif($LastID>9 && $LastID<=99){
                     $lKode = $LastID+1;
                    return $lKode;
                }
            }elseif($kode==2){
                if($LastID<10){
                    $lKode = $LastID+1;
                    return "00".$lKode;
                }elseif($LastID>9 && $LastID<=99){
                     $lKode = $LastID+1;
                    return "0".$lKode;
                }elseif($LastID>99 && $LastID<=999){
                     $lKode = $LastID+1;
                    return $lKode;
                }
            }elseif($kode==3){
                if($LastID<10){
                    $lKode = $LastID+1;
                    return "000".$lKode;
                }elseif($LastID>9 && $LastID<=99){
                     $lKode = $LastID+1;
                    return "00".$lKode;
                }elseif($LastID>99 && $LastID<=999){
                     $lKode = $LastID+1;
                    return "0".$lKode;
                }elseif($LastID>999 && $LastID<=9999){
                     $lKode = $LastID+1;
                    return $lKode;
                }
            }elseif($kode==4){
                if($LastID<10){
                    $lKode = $LastID+1;
                    return "0000".$lKode;
                }elseif($LastID>9 && $LastID<=99){
                     $lKode = $LastID+1;
                    return "000".$lKode;
                }elseif($LastID>99 && $LastID<=999){
                     $lKode = $LastID+1;
                    return "00".$lKode;
                }elseif($LastID>999 && $LastID<=9999){
                     $lKode = $LastID+1;
                    return "0".$lKode;
                }elseif($LastID>9999 && $LastID<=99999){
                    $lKode = $LastID+1;
                    return $lKode;
                }
            }elseif($kode==5){
                if($LastID<10){
                    $lKode = $LastID+1;
                    return "00000".$lKode;
                }elseif($LastID>9 && $LastID<=99){
                     $lKode = $LastID+1;
                    return "0000".$lKode;
                }elseif($LastID>99 && $LastID<=999){
                     $lKode = $LastID+1;
                    return "000".$lKode;
                }elseif($LastID>999 && $LastID<=9999){
                     $lKode = $LastID+1;
                    return "00".$lKode;
                }elseif($LastID>9999 && $LastID<=99999){
                    $lKode = $LastID+1;
                    return $lKode;
                }elseif($LastID>99999 && $LastID<=999999){
                    $lKode = $LastID+1;
                    return $lKode;
                }
            }
        }

        public function getKode($tabel,$id,$data){
            if($tabel=="supplier"){
                $lID = $this->getLastID($tabel,$id,3,4);
                $kode = "VEN";
                return $kode.$lID;
            }elseif($tabel=="proporma_invoice"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "PI";
                return $kode.$lID;
            }elseif($tabel=="order_confirmation"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "OC";
                return $kode.$lID;
            }elseif($tabel=="kategori_supplier"){
                $lID = $this->getLastID($tabel,$id,3,4);
                $kode = "KSP";
                return $kode.$lID;
            }elseif($tabel=="jenis_bahan_mentah_cushion"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "JBM";
                return $kode.$lID;
            }elseif($tabel=="bahan_mentah_cushion"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "BM";
                return $kode.$lID;
            }elseif($tabel=="jenis_kain"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "JK";
                return $kode.$lID;
            }elseif($tabel=="kain"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "CC";
                return $kode.$lID;
            }elseif($tabel=="cushion"){
                //$lID = $this->getLastID($tabel,$id,3,3);
                $kode = $data->id_kain.$data->id_busa;
                return $kode;
            }elseif($tabel=="jenis_cushion"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "JC";
                return $kode.$lID;
            }elseif($tabel=="kategori_item"){
                $lID = $this->getLastID($tabel,$id,2,1);
                $kode = "KI";
                return $kode.$lID;
            }elseif($tabel=="item"){
                $lID = $this->getLastID($tabel,$id,3,4);
                $kode = "ITM";
                return $kode.$lID;
            }elseif($tabel=="busa"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "BSA";
                return $kode.$lID;
            }elseif($tabel=="jenis_pengesub"){
                $lID = $this->getLastID($tabel,$id,4,3);
                $kode = "JPGS";
                return $kode.$lID;
            }elseif($tabel=="pengesub"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "PGS";
                return $kode.$lID;
            }elseif($tabel=="jenis_anyam"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "JAN";
                return $kode.$lID;
            }elseif($tabel=="plastik"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "BAN";
                return $kode.$lID;
            }elseif($tabel=="Jenis_bahan_plastik"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "JBAN";
                return $kode.$lID;
            }elseif($tabel=="warna"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "WRN";
                return $kode.$lID;
            }elseif($tabel=="kategori_warna"){
                $lID = $this->getLastID($tabel,$id,4,3);
                $kode = "KWRN";
                return $kode.$lID;
            }elseif($tabel=="accesories"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "ACC";
                return $kode.$lID;
            }elseif($tabel=="kategori_acc"){
                $lID = $this->getLastID($tabel,$id,4,3);
                $kode = "KACC";
                return $kode.$lID;
            }elseif($tabel=="epoxy"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "EPX";
                return $kode.$lID;
            }elseif($tabel=="jenis_epoxy"){
                $lID = $this->getLastID($tabel,$id,4,3);
                $kode = "JEPX";
                return $kode.$lID;
            }elseif($tabel=="packing"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "PCK";
                return $kode.$lID;
            }elseif($tabel=="jenis_packing"){
                $lID = $this->getLastID($tabel,$id,4,3);
                $kode = "JPCK";
                return $kode.$lID;
            }elseif($tabel=="pipa"){
                $lID = $this->getLastID($tabel,$id,2,3);
                $kode = "PP";
                return $kode.$lID;
            }elseif($tabel=="jenis_pipa"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "JPP";
                return $kode.$lID;
            }elseif($tabel=="purchase_order"){
                $lID = $this->getLastID($tabel,$id,2,3);
                $kode = "PO";
                return $kode.$lID;
            }elseif($tabel=="purchase_order_detail"){
                $lID = $this->getLastID($tabel,$id,2,3);
                $kode = "PO";
                return $kode.$lID;
            }elseif($tabel=="penerimaan_barang"){
                $lID = $this->getLastID($tabel,$id,2,3);
                $kode = "PB";
                return $kode.$lID;
            }elseif($tabel=="spk"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "SPK";
                return $kode.$lID;
            }elseif($tabel=="lolos_qc"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "LQC";
                return $kode.$lID;
            }elseif($tabel=="rekapitulasi_anggaran"){
                $lID = $this->getLastID($tabel,$id,2,3);
                $kode = "RA";
                return $kode.$lID;
            }elseif($tabel=="surat_kebutuhan_bahan"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "SKB";
                return $kode.$lID;
            }elseif($tabel=="surat_pengambilan_bahan"){
                $lID = $this->getLastID($tabel,$id,3,3);
                $kode = "SPB";
                return $kode.$lID;
            }
        }

        public function saveAll($table, $id)
        {
            $data   = json_decode($this->input->post('data',TRUE));

            $last   = NULL;
            if($data->$id !== NULL){
                $this->db->where($id, $data->$id)->update($table, $data);
                $last   = $data;
            }else{
                $data->$id = $this->getKode($table,$id,$data);
                $this->db->insert($table, $data);
                $last   = $this->db->limit(1,0)->order_by($id, 'DESC')->get($table)->row();
            }
            $total  = $this->db->get($table)->num_rows();
            
            $json   = array(
                "success"   => TRUE,
                "message"   => 'Data berhasil disimpan',
                'total'     => $total,
                "data"      => $last
            );
            
            echo json_encode($json);
        }
        
        public function deleteAll($table, $id){
            $data   = json_decode($this->input->post('data',TRUE));
            $last   = NULL;
            
            if($data->$id !== ""){
                $this->db->where($id, $data->$id)->delete($table, $data);
                $last   = $data;
            }
            $total  = $this->db->get($table)->num_rows();            
            $json   = array(
                'success'   => TRUE,
                'message'   => 'Data berhasil dihapus',
                'total'     => $total,
                'data'      => $last
            );
 
            echo json_encode($json);
        }   

        public function pi(){
            $this->load->view('pi');
        }

        public function oc(){
            $this->load->view('oc');
        }

        public function voucher(){
            $this->load->view('voucher');
        }      
   
}