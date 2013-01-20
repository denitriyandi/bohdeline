<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Payment Voucher</title>
</head>

<body>
<center	>
<div style="float:left;width:800px;height:600px;margin-left:auto;margin-right:auto" >
  <p style="border-bottom-width:1px"><strong>BUKTI PEMBAYARAN ( PAYMENT VOUCHER )</strong></p>

<div style="float:left"> 
		<table>
        	<tr>
            	<td>Dibayarkan Kepada</td>
                <td>:</td>
                <td>testvalue</td>
            </tr>
        	<tr>
				<td>Bagian</td>
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
    <table width="100%" border=1 cellspacing="3px">
    	<th width="15">No</th>
    	<th width="45%">DESCRIPTION/RINCIAN</th>
		<th width="10%">QTY</TH>
		<th>HARGA</TH>
        <th>JUMLAH</TH>
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
        	<td>Test Value</td>
        </tr>";
	}
?>
<td colspan="4">TOTAL</td>
<td>&nbsp;</td>
</table>

<table width="100%" cellspacing="5px" cellpadding="3px">
	<tr>
    	<td width="30%" align="left">Dibuat oleh,</td>
        <td width="40%" align="center">Diketahui oleh,</td>
        <td width="30%" align="right">Diterima Oleh,</td>
    </tr>
	<tr>
    	<td width="30%" align="left">&nbsp;</td>
        <td width="40%" align="center">&nbsp;</td>
        <td width="30%" align="right">&nbsp;</td>
    </tr>

</table>
</div>
</center>
</body>
</html>