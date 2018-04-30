<?php
    $con = mysqli_connect("den1.mysql2.gear.host", "giftgiving", "Wf6s7G!!sASh", "giftgiving");
    
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $statement = mysqli_prepare($con, "SELECT * FROM users WHERE username = ? AND password = ?");
    mysqli_stmt_bind_param($statement, "ss", $username, $password);
    mysqli_stmt_execute($statement);
    
    mysqli_stmt_store_result($statement);
    mysqli_stmt_bind_result($statement, $name, $email, $username, $password, $profile_pic);
    
    $response = array();
    $response["success"] = false;  
    
    while(mysqli_stmt_fetch($statement)){
        $response["success"] = true;  
        $response["username"] = $username;
        $response["password"] = $password;
        $response["name"] = $name;
        $response["email"] = $email;
        $response["profile_pic"] = $profile_pic;
    }
    
    echo json_encode($response);
?>