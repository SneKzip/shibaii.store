<?php

require_once get_theme_file_path("assets/backend/verifications/helpers.php");

function verification_status(){
    if(isset($_SESSION["user"]["auth"])){
        return true;
    }
    else{
        return $result = check_cookie();
    }
}

function check_cookie(){
    $user_token;

    if(isset($_COOKIE["token"])){
        $user_token = $_COOKIE["token"];
        return $result = request_database($user_token);
    }
    else{
        return false;
    }
}

function request_database($user_token){
    $new_connect_db = connect_database();
    $sql_request = "SELECT * FROM users WHERE token = '$user_token'";
    $result_sql_request = mysqli_query($new_connect_db, $sql_request);

    if($result_sql_request){
        initialization_session($result_sql_request);
        return true;
    }
    else{
        return false;
    }
}

function initialization_session($user_data){
    $_SESSION["user"]["auth"] = true;
    
    foreach($user_data as $row){
        $_SESSION["user"]["name"] = $row["name"];
        $_SESSION["user"]["id"] = $row["id"];
        $_SESSION["user"]["role"] = $row["permission"];
    }
}