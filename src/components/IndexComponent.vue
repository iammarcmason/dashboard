<template>
  <section id="top">
    <div class="container">
      <h1>Posts</h1>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Brief</th>
            <th>Body</th>
            <th colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post._id">
            <td>{{ post.title }}</td>
            <td>{{ post.brief }}</td>
            <td>{{ post.body }}</td>
            <td>
              <router-link
                :to="{name: 'edit', params: { id: post._id }}"
                class="btn btn-primary"
              >Edit</router-link>
            </td>
            <td>
              <button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
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
  },
  methods: {
    deletePost(id) {
      let uri = `https://dashboard.iammarcmason.now.sh:4000/posts/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.posts.splice(this.posts.indexOf(id), 1);
      });
    }
  }
};
</script>