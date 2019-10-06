<template>
  <div>
    <!-- Nav -->
    <div id="header">
      <div class="top">
        <nav id="nav">
          <input type="checkbox" id="theme-toggle" v-model="nightMode" />
          <label for="theme-toggle">
            <span></span>
          </label>
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
export default {
  data: function() {
    return {
      nightMode: localStorage.getItem("nightMode") || false
    };
  },

  watch: {
    nightMode: function(newVal) {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      console.log("Night Mode: " + JSON.stringify(this.nightMode));
      var className = "nightMode";
      if (newVal) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  }
};
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
:root {
  --toggle-size: 1rem;
  --switch-w: 4em;
  --switch-h: 2em;
  --switch-handle-scale: 0.65;
  --switch-off-handle-x: -0.125em;
  --switch-on-handle-x: calc(100% - 0.125em);
  --switch-transition-duration: 0.2s;
}
#page {
  background: #dee6ed;
}
#page.theme-dark {
  background: #090d11;
}
#theme-toggle {
  display: none;
}
#theme-toggle + label {
  font-size: var(--toggle-size);
  display: flex;
  height: var(--switch-h);
  width: var(--switch-w);
  border-radius: calc(var(--switch-h) / 2);
  background-size: auto 8em;
  background-position: bottom;
  background-image: linear-gradient(
    180deg,
    #021037 0%,
    #20206a 19%,
    #4184b1 66%,
    #62e7f7 100%
  );
  transition: var(--switch-transition-duration);
  border: 0.125em solid #eef3f6;
  overflow: hidden;
}
#theme-toggle + label span {
  background: #fffad8;
  border-radius: 50%;
  height: var(--switch-h);
  width: var(--switch-h);
  -webkit-transform: translateX(var(--switch-off-handle-x))
    scale(var(--switch-handle-scale));
  transform: translateX(var(--switch-off-handle-x))
    scale(var(--switch-handle-scale));
  transition: var(--switch-transition-duration);
  cursor: pointer;
  box-shadow: 0 0 0.25em 0.0625em #fbee8d, 0 0 2em 0 #ffeb3b,
    inset -0.25em -0.25em 0 0 #fbee8e,
    inset -0.3125em -0.3125em 0 0.625em #fff5b2;
  margin-top: var(--switch-off-handle-x);
}
#theme-toggle:checked {
  font-size: var(--switch-font-size);
}
#theme-toggle:checked + label {
  background-position: top;
  border-color: #5983a6;
}
#theme-toggle:checked + label span {
  background: transparent;
  -webkit-transform: translateX(var(--switch-on-handle-x))
    scale(var(--switch-handle-scale));
  transform: translateX(var(--switch-on-handle-x))
    scale(var(--switch-handle-scale));
  box-shadow: inset -0.1875em -0.1875em 0 0 #fbe7ef,
    inset -0.5625em -0.5625em 0 0 #fffff7;
}
/*-- Housekeeping --*/
*,
*:before,
*:after {
  box-sizing: inherit;
}
#page {
  transition: 0.2s ease;
}
</style>