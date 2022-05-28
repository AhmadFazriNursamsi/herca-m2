<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$data = "";

if(isset( $_POST['data'])) {
	 $data = $_POST['data'];
	 $re = '/data:image\/(.*);base64/m';

	preg_match_all($re, $data, $matches, PREG_SET_ORDER, 0);

	// Print the entire match result

	list($type, $data) = explode(';', $data);
	list(, $data)      = explode(',', $data);
	$data = base64_decode($data);

	$namafile = strtotime(date('Y-m-d H:i:s')).rand(10,100).rand(10,100);

	if($matches[0][1]) {
		file_put_contents('img/'.$namafile.'.'.$matches[0][1], $data);
		echo 'img/'.$namafile.'.'.$matches[0][1];
		exit;
	}

}

echo false;

?>