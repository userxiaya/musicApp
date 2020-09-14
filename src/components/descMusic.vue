<template>
  <web-view ref="web" url="http://192.168.3.5:8080" class="webview" @receiveMessage="receiveMessage"></web-view>
</template>

<script>
export default {
  data() {},
  mounted() {},
  methods: {
    ready() {
    },
    sendMessage(data) {
      const code = `javascript:callJS(${JSON.stringify(data)})`
      this.$refs.web.sendMessage(code);
    },
    receiveMessage(url) {
      this.$emit('desc',url.message)
    }
  }
};
</script>

<style scoped>
.webview {
  width: 750px;
  flex: 1;
}
</style>