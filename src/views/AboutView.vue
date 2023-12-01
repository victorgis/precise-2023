<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <!-- Add a button with a click event handler -->
      <button @click="downloadFile" class="niching-btn">Download now</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadFile() {
      // Specify the filename and path (adjust based on your project structure)
      const filePath = "../downloads/locate-share.apk";

      // Create a link element
      const link = document.createElement("a");
      link.href = filePath;
      link.download = "locate-share.apk";

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click event on the link
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    },
  },
};
</script>

<style>
.niching-btn {
  color: #262626;
  background: #fff;
  border: #262626 1px solid;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
