<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Pengambilan Barang</title>
</head>
<body>
<center	>
<div style="float:left;width:900px;height:600px;margin-left:auto;margin-right:auto" >
<h3 style="border-bottom-style:solid:20px">SURAT PENGAMBILAN BARANG</h3>

<div style="float:left"> 
		<table>
        	<tr>
            	<td>Nama</td>
                <td>:</td>
                <td>testvalue</td>
            </tr>
        	<tr>
				<td>Nomor SPK</td>
                <td>:</td>
                <td>testvalue</td>
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

<table width="100%" border="1px" cellpadding="3px" cellspacing="3px" align="center">
	 <th colspan="2">FRAME</th>
     <th colspan="2">PLASTIK</th>
     <tr align="center">
     	<td width="45%">Jenis Frame</td>
        <td width="5%">Pcs</td>
     	<td width="45%">Jenis Plastic</td>
        <td width="5%">Kg</td>
     </tr>     
     <?
     	for($i=1;$i<6;$i++)
		{
			echo "<tr>
				 	<td>TestValue</td>
					<td>TestValue</td>
				 	<td>TestValue</td>
				 	<td>TestValue</td>
				 </tr>";	
		}
	 ?>
     <tr>
     	<td>KETERANGAN</td>
        <td colspan="3">&nbsp;</td>
     </tr>
</table>
    <table width="100%" cellspacing="5px" cellpadding="3px">
	<tr>
    	<td width="30%" align="left"><div align="center">Diperiksa Oleh,</div></td>
        <td width="40%" align="center"><div align="center">Yang Menyerahkan,</div></td>
        <td width="30%" align="right"><div align="center">Penerima, </div></td>
    </tr>
	<tr>
    	<td width="30%" height="108" align="left"><div align="center">
    	  <blockquote>
    	    <p>(.........................................)</p>
  	    </blockquote>
    	</div></td>
        <td width="40%" align="center"><div align="center">(.........................................)</div></td>
        <td width="30%" align="right"><div align="center">(.........................................)</div></td>
    </tr>

</table>
</div>
</center>
</body>
</html>