<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView></RouterView>
    <body class="bg-body-tertiary">      
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" >
    <div class="container-fluid">
      <a class="navbar-brand fw-bolder" href="#"><img src="https://cdn-icons-png.flaticon.com/128/2204/2204335.png" class="m-2" style="max-width: 50px;" >  สภาพอากาศ</a>
      <button class="nav navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault"  >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarsExampleDefault" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link " to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/search" >search</RouterLink>
        </li>
  
      </ul>

      </div>
    </div>
  </nav>
  </body>

  </template>