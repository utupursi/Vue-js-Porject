<?php
include 'src/config.php';
header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents("php://input"));

$request = $data->request;
//if($request == 2){
//    $username = $data->username;
//    $name = $data->name;
//    $email = $data->email;
//
//    $userData = mysqli_query($con,"SELECT * FROM quiz");
//    if(mysqli_num_rows($userData) == 0){
//        mysqli_query($con,"INSERT INTO users(quiz_name) VALUES('".$username."')");
//        echo "Insert successfully";
//    }else{
//        echo "Username already exists.";
//    }
//
//    exit;
//}
if($request == 2){
    $quiz = $data->quiz;

    $userData = mysqli_query($con,"SELECT * FROM quiz");
    if(mysqli_num_rows($userData) == 0){
        mysqli_query($con,"INSERT INTO quiz(quiz_name) VALUES('".$quiz."')");
        echo "Insert successfully";
    }else{
        echo "Username already exists.";
    }

    exit;
}
//$userData = mysqli_query($con, "select * from quiz ");
//
//$response = array();
//while ($row = mysqli_fetch_assoc($userData)) {
//    $response[] = $row;
//}
//var_dump($response);
//return json_encode($response);