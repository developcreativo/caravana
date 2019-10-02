<template>
  <div>
    <ul>
      <li v-for="(emisora, index) in emisoras_list" :key="index">
        <img :src="emisora.logotipo" class="full-image" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "emisoras-nav-bar",
  props: {
    emisoras_list: Object,
  }
};
</script>