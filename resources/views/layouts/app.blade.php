<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <!-- ============================================
         FAVICON - Place this at the VERY TOP of head
    ============================================ -->
    <!-- Standard favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('icons/icon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('icons/icon-16x16.png') }}">
    
    <!-- Apple Touch Icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('icons/icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('icons/icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('icons/icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('icons/icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('icons/icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('icons/icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('icons/icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('icons/icon-180x180.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('icons/icon-192x192.png') }}">
    
    <!-- Android/Chrome -->
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('icons/icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="384x384" href="{{ asset('icons/icon-384x384.png') }}">
    <link rel="icon" type="image/png" sizes="512x512" href="{{ asset('icons/icon-512x512.png') }}">
    
    <!-- Microsoft Windows -->
    <meta name="msapplication-TileImage" content="{{ asset('icons/icon-144x144.png') }}">
    <meta name="msapplication-TileColor" content="#667eea">
    
    <title>{{ config('app.name', 'Dynamic Module System') }}</title>
    
    <!-- ============================================
         STYLES
    ============================================ -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    
    <!-- ============================================
         PWA META TAGS
    ============================================ -->
    
    <!-- Manifest -->
    <link rel="manifest" href="{{ asset('manifest.json') }}">
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#667eea">
    
    <!-- Apple iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="DMS">
    
    <!-- Android/Chrome -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="Dynamic Module System">
    
    <!-- Color Scheme -->
    <meta name="color-scheme" content="light dark">
    
    <!-- Description -->
    <meta name="description" content="Enterprise Dynamic Module Management System">
    
    <!-- ============================================
         PWA SERVICE WORKER
    ============================================ -->
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js')
                    .then(function(registration) {
                        console.log('✅ Service Worker registered:', registration);
                    })
                    .catch(function(error) {
                        console.log('❌ Service Worker registration failed:', error);
                    });
            });
        }
    </script>
    
    @stack('styles')
</head>
<body>
    
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <i class="fa fa-cubes" style="color:#667eea;"></i>
                    {{ config('app.name', 'Dynamic Module System') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">
                                    <i class="fa fa-sign-in"></i> {{ __('Login') }}
                                </a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">
                                        <i class="fa fa-user-plus"></i> {{ __('Register') }}
                                    </a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user-circle"></i>
                                    {{ Auth::user()->name }}
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                        <i class="fa fa-sign-out"></i> {{ __('Logout') }}
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>

    <script src="{{ asset('js/app.js') }}" defer></script>
    @stack('scripts')
</body>
</html>