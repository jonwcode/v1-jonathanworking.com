<?php

$json = file_get_contents('php://input');


echo $json->name;

?>