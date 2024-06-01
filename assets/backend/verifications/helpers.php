<?php
session_start();

$duplicate_counter = 0;
// Подключение дополнительных файлов
require_once(get_template_directory_uri() . '/assets/backend/config_db.php');

// Проверка переменной на соответствие регулярному выражению
function regexp_check($regexp, $variable)
{
    return preg_match($regexp, $variable);
}

// Редирект пользователя
function redirect(string $path){
    header("Location: ".$path);
    die();
}

// Подключение к бд
function connect_database()
{
    return $link = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
}

// Закрытие подключения к бд
function close_connect_database($connect){
    mysqli_close($connect);
}

// Создание нового пользователя в бд
function create_new_user_db(string $name, string $email, string $password){
    $new_connect_db = connect_database();
    $user_data = [
        "name" => $name,
        "email" => $email,
        "password" => $password
    ];
    $response_check_user = check_user_data_on_duplicate_in_db($new_connect_db, $user_data);
    
    switch($response_check_user){
        case 0: set_new_data_user_in_db($new_connect_db, $user_data); break;
        case 1: get_validation_error("Пользователь с такой почтой занят"); break;
        case 2: get_validation_error("Пользователь с данным именем занят"); break;
    }

    $duplicate_counter = 0;
    close_connect_database($new_connect_db);
    exit();
}

// Проверка на дублирование пользователя в бд
function check_user_data_on_duplicate_in_db($connect_db, $new_user_data){
    $email = $new_user_data["email"];
    $name = $new_user_data["name"];
    $sql_request = "SELECT email FROM users WHERE email = '$email'";
    $result_sql_request = mysqli_query($connect_db, $sql_request);

    if(mysqli_num_rows($result_sql_request) == 1){
        $duplicate_counter = 1;
    }

    $sql_request = "SELECT name FROM users WHERE name = '$name'";
    $result_sql_request = mysqli_query($connect_db, $sql_request);

    if(mysqli_num_rows($result_sql_request) == 1){
        $duplicate_counter = 2;
    }

    return $duplicate_counter;
}

// Заполнение бд данными нового пользоваетя
function set_new_data_user_in_db($connect_db, $new_user_data){
    $user_token = generate_random_user_token();

    $name = $new_user_data["name"];
    $email = $new_user_data["email"];
    $password = $new_user_data["password"];

    $sql = "INSERT INTO users (name, email, password, token)
    VALUES ('$name', '$email', '$password', '$user_token')";

    mysqli_query($connect_db, $sql);
    set_user_session($user_token);
    redirect("../../home.php");
}

// Проверка логина и пароля юзера на соответствие данным в бд
function check_user_data_db(string $user_email, string $user_password){
    $new_connect = connect_database();
    $sql = "SELECT * FROM users WHERE email = '$user_email'";
    $result = mysqli_query($new_connect, $sql);
    if(mysqli_num_rows($result) == 1){
        $request_result = get_mysqli_assoc($result, $user_password);
        if($request_result){
            redirect("../../home.php");
        }
        else{
            get_validation_error("Ошибка, почта или пароль неверные");
        }
    }
    else if(mysqli_num_rows($result) != 1){
        get_validation_error("Ошибка, почта или пароль неверные");
    }
    mysqli_close($new_connect);
}

// Заполнение массива user_data данными об пользователе из бд
function get_mysqli_assoc($request_result, $user_password){
    $user_data = [];
    $user_data = mysqli_fetch_assoc($request_result);
    $response = check_user_password($user_data, $user_password);
    set_user_session($user_data["token"]);
    return $response;
}

// Сверка пароля от пользователя с клиента с паролем из бд
function check_user_password($user_data,$user_password){
    if((string) $user_data["password"] == (string) $user_password){
        return true;
    }
    else{
        return false;
    }
}

// Инициализация юзера
function set_user_session($user_token){
    set_user_cookie("token", (string) $user_token);
    $_SESSION["user"]["auth"] = true;
}

// Создание куки (на 30 дней)
function set_user_cookie($name, $value){
    setcookie($name, $value, array(
        'expires' => time() + 2629743,
        'path' => '/',
        'secure' => true
    ));
}

// Ошибка при валидации данных, либо пользователь не найден в бд
function get_validation_error(string $error_msg){
    if(empty($error_msg)){
        echo "Ошибка при регистрации";
    }
    else{
        echo $error_msg;
    }
}

// Генерация рандомного токена
function generate_random_user_token(){
    $bytes = openssl_random_pseudo_bytes(20, $cstrong);
	return bin2hex($bytes); 
}


// Проверка авторизации пользователя
function check_auth(){
    $token;

    if(isset($_COOKIE["token"])){
        $token = $_COOKIE["token"];
    }
    else{
        return false;
    }

    $connect_db = connect_database();
    $sql_request = "SELECT * FROM users WHERE token = '$token'";
    $result_sql_request = mysqli_query($connect_db, $sql_request);

    if(mysqli_num_rows($result_sql_request) == 1){
        return true;
    }
    else{
        return false;
    }
}