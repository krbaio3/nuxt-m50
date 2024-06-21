<template>
	<select name="{{selectName}}">
		{{#options}}
		<option value="{{value}}" {{#selected}}selected{{/selected}}>{{text}}</option>
		{{/options}}
	</select>
</template>

<script setup lang="ts">
</script>
