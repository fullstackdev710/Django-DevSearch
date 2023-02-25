<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript: Hello, World!</title>
    <link rel="stylesheet" href="main.css?ver=<?php echo time(); ?>">
</head>

<body>
    <div id="form-wrapper">
        <h1>Login</h1>
        <hr>
        <form id="login-form" name="loginForm" action="">
            <label for="">Username:</label>
            <input type="text" name="username" />

            <label for="">Password:</label>
            <input type="password" name="password" />

            <input type="submit" value="Login">
        </form>
    </div>
</body>
<script src="login.js?ver=<?php echo time(); ?>"></script>

</html>