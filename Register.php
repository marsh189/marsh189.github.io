<?php
    $con = mysqli_connect("den1.mysql2.gear.host", "giftgiving", "Wf6s7G!!sASh", "giftgiving");
    
    $name = $_POST["name"];
    $age = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $statement = mysqli_prepare($con, "INSERT INTO users (username, password, name, email, profile_pic) VALUES (?, ?, ?, ?, null)");
    mysqli_stmt_bind_param($statement, "siss", $username, $password, $name, $email);
    mysqli_stmt_execute($statement);
    
    $response = array();
    $response["success"] = true;  
    
    echo json_encode($response);
?>