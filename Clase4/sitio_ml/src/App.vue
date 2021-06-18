<template>
  <div id="app">
    <div>
      <lang-button
        v-for="nombre in $store.getters.shortNames"
        :key="nombre"
        :lang="nombre"
      />
    </div>
    <lang-text />
    <messages-list />
    <action-button />
    <result-text />
  </div>
</template>

<script>
import ActionButton from "./components/ActionButton.vue";
import LangButton from "./components/LangButton.vue";
import LangText from "./components/LangText.vue";
import MessagesList from "./components/MessagesList.vue";
import ResultText from "./components/ResultText.vue";

export default {
  components: {
    ResultText,
    ActionButton,
    MessagesList,
    LangText,
    LangButton,
  },
};
</script>

<style></style>
