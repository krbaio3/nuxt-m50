<template>
	<h3>Component Api</h3>
	<p>Componente de la página secuence</p>
	<p>Parametro id: {{ $route.params.id }}</p>
</template>
<style scoped>
</style>
<script setup lang="ts">
const $route = useRoute();

</script>




