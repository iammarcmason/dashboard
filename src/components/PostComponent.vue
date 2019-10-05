<template>
  <section id="top">
    <div class="container">
      <div class="post">
        <article class="item">
          <h2>{{post.title}}</h2>
          <h1>{{post.brief}}</h1>
          <!--<p>{{post.body}}</p>-->
          <p><span v-html="post.body"></span></p>
        </article>
      </div>
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
    let uri = `http://localhost:4000/posts/post/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.post = response.data;
    });
  }
};
</script>