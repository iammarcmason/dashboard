<template>
  <section id="top">
    <div class="container">
      <header>
        <h1>Edit Post</h1>
        <form @submit.prevent="updatePost">
          <div class="row">
            <div class="form-group">
              <label>Post Title:</label>
              <input type="text" class="form-control" v-model="post.title" />
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <label>Post Brief:</label>
              <textarea class="form-control" v-model="post.brief" rows="2"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="post.body" rows="50"></textarea>
            </div>
          </div>
          <br />
          <div class="form-group">
            <button class="btn btn-primary">Update</button>
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
  created() {
    let uri = `https://dashboard.iammarcmason.now.sh:4000/posts/edit/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.post = response.data;
    });
  },
  methods: {
    updatePost() {
      let uri = `https://dashboard.iammarcmason.now.sh:4000/posts/update/${this.$route.params.id}`;
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({ name: "posts" });
      });
    }
  }
};
</script>