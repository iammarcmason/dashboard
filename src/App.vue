<template>
  <div>
    <!-- Nav -->

    <div id="header">
      <div class="top">
        <nav id="nav">
          <ul>
            <li>
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li>
              <router-link to="/create" class="nav-link">Create Post</router-link>
            </li>
            <li>
              <router-link to="/posts" class="nav-link">Posts</router-link>
            </li>
            <li>
              <router-link to="/post/5d97939c8970913bbc3c9cd2" class="nav-link">Post</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="bottom">
        <!-- Social Icons -->
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-twitter">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-facebook-f">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-github">
              <span class="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-dribbble">
              <span class="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon solid fa-envelope">
              <span class="label">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>



<script>
export default {};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>