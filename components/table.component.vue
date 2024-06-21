<!--table.components.mustache-->
<tempalte>
<div class="card shadow mb-5 bg-body-tertiary rounded object-fit-cover z-n1"
		 style="{{>basicStyling}}">
	<table class="table table-striped table-hover custom_table" control-id="{{control_id}}" id="{{control_id}}">
		<thead>
		<tr>
			{{#headers}}
			<th scope="col" style="min-width: {{width}}" class="text-uppercase text-center">{{header}}</th>
			{{/headers}}
		</tr>
		</thead>
		<tbody>
		{{#rows}}
		<tr data-id="{{id}}" style="cursor: pointer">
			{{#columns}}
			<th scope="row" hidden></th>
			<td class="text-center text-truncate" data-key="{{key}}" >{{data}}</td>
			{{/columns}}
		</tr>
		{{/rows}}
		</tbody>
	</table>
</div>
</tempalte>


<script setup lang="ts">
</script>
