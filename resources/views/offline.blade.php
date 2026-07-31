<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're Offline</title>
    <style>
        body {
            font-family: 'Nunito', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #f5f7fa;
            margin: 0;
            padding: 20px;
        }
        .offline-container {
            text-align: center;
            max-width: 400px;
        }
        .offline-icon {
            font-size: 80px;
            color: #667eea;
            margin-bottom: 20px;
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        p {
            color: #6c757d;
            margin-bottom: 20px;
        }
        .btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            text-decoration: none;
            display: inline-block;
        }
        .btn:hover {
            background: #5a67d8;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        .offline-tips {
            margin-top: 30px;
            text-align: left;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .offline-tips h4 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        .offline-tips li {
            color: #6c757d;
            margin-bottom: 8px;
        }
    </style>
</head>
<body>
    <div class="offline-container">
        <div class="offline-icon">📡</div>
        <h1>You're Offline</h1>
        <p>It looks like you're not connected to the internet. Please check your connection.</p>
        <button class="btn" onclick="window.location.reload()">
            <i class="fa fa-refresh"></i> Retry Connection
        </button>
        
        <div class="offline-tips">
            <h4>💡 What you can do:</h4>
            <ul style="padding-left: 20px;">
                <li>Check your Wi-Fi or network connection</li>
                <li>Wait a moment and try again</li>
                <li>Some cached pages may still be accessible</li>
            </ul>
        </div>
    </div>
</body>
</html>