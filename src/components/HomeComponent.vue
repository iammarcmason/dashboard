<template>
  <div class="container">
    <!--v-bind:class="{ 'theme-dark' : nightMode }"-->
    <header>
      <h2 class="alt">
        <strong>Marc Mason</strong>
      </h2>
      <p>Freelance data developer and part time web developer/python nerd.</p>
    </header>
    <footer>
      <div v-for="post in posts" :key="post._id" class="card">
        <router-link :to="{name: 'post', params: { id: post._id }}">
          <div class="container">
            <h4>
              <b>{{ post.title }}</b>
            </h4>
            <br />
            <p>{{ post.brief }}</p>
          </div>
        </router-link>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    let uri = "https://dashboard.iammarcmason.now.sh:4000/posts";
    this.axios.get(uri).then(response => {
      this.posts = response.data;
    });
  }
};
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  float: left;
  width: 100%;
  height: 200px;
  margin-bottom: 25px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>