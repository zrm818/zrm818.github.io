<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phonenum = $_POST['phonenum'];
    $zip = $_POST['zip'];
    $aptrequest = $_POST['aptrequest'];

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        function get_data() {
            $dataArr = array();
            $dataArr = array(
                'firstName' => $_POST['firstName'],
                'lastName' => $_POST['lastName'],
                'phonenum' => $_POST['phonenum'],
                'zip' => $_POST['zip'],
                'aptrequest' => $_POST['aptrequest'],
            );
            return json_encode($dataArr);
        }

        $name = "aptformdb";
        $file_name = $name . '.json';

        if(file_put_contents("$file_name", get_data())) {
            echo $file_name .' file created';
        }
        else {
            echo 'An error has occurred';
        }
    }
?>