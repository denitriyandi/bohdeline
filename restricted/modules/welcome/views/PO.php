<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Purchase Order</title>
</head>
<body>

<center	>
<div style="float:left;width:800px;height:600px;margin-left:auto;margin-right:auto" >
  <h2>PURCHASE ORDER</h2>
<div style="float:left"> 
		<table>
        	<tr>
            	<td colspan="3">Telah diterima dengan baik dari :   </td>
            </tr>
        	<tr>
            	<td>Nama</td>
                <td>:</td>
                <td>testvalue</td>
            </tr>
        	<tr>
				<td>Bagian</td>
                <td>:</td>
                <td>testvalue</td>
            </tr>
        	<tr>
            	<td colspan="3">Barang-barang tersebut dibawah ini :   </td>
            </tr>  
        </table>
</div>
<div style="float:right">
		<table>
        	<tr>
            	<td>Tanggal</td>
                <td>:</td>
                <td>testvalue</td>
            </tr>
        </table>
	</div>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <table width="100%" border=1 cellspacing="3px">
    	<th width="10">No</th>
    	<th width="45%">Nama Barang</th>
		<th width="15%">Jumlah</TH>
		<th width="10%">Satuan</TH>
        <th>Ketrangan</th>
<?
	for($i=1;$i<8;$i++)
	{
     echo "<tr>
        	<td>$i</td>
        	<td>Test Value</td>
        	<td>Test Value</td>
        	<td>Test Value</td>
        	<td>Test Value</td>
        </tr>";
	}
?>
</table>
    <p>&nbsp;</p>
    <table width="100%" cellspacing="5px" cellpadding="3px">
      <tr>
    	<td width="30%" align="left" valign="top"><div align="center">Yang Menyerahkan, </div></td>
        <td width="37%" align="center"><b>Office / Factory : </b><br/>
        	Jl. Gombang No. 37 Desa Gombang<br />Plumbon - Cirebon<br />Telp. /Fax: (0231) 324 515 / (0231) 324 235
        </td>
        <td width="33%" align="right" valign="top"><div align="center">PT. SUMROES KARYA UTAMA</div></td>
    </tr>
	<tr>
    	<td width="30%" align="left">(.........................................................)</td>
        <td width="37%" align="center">&nbsp;</td>
        <td width="33%" align="right"><div align="center">(.......................................................).</div></td>
    </tr>

</table></div>
</center>
</body>
</html>