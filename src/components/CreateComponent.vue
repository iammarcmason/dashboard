<template>
  <section id="top">
    <div class="container">
      <header>
        <h1>Create A Post</h1>
        <form @submit.prevent="addPost">
          <div class="row">
            <div>
              <div>
                <label>Post Title:</label>
                <input type="text" v-model="post.title" />
              </div>
            </div>
          </div>
          <div class="row">
            <div>
              <div>
                <label>Post Brief:</label>
                <textarea v-model="post.brief" rows="2"></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div>
              <div>
                <label>Post Body:</label>
                <textarea v-model="post.body" rows="5"></textarea>
              </div>
            </div>
          </div>
          <br />
          <div>
            <button class="btn btn-primary">Create</button>
          </div>
        </form>
      </header>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    };
  },
  methods: {
    addPost() {
      let uri = "http://localhost:4000/posts/add";
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({ name: "posts" });
      });
    }
  }
};
</script>