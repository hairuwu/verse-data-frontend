<template>
	这是MQ->HIVE的工具属性输入页面
	<el-form :inline="true"  class="demo-form-inline">
		<el-form-item label="Approved by">
			<el-input  placeholder="Approved by" />
		</el-form-item>
		<el-form-item label="Activity zone">
			<el-select  placeholder="Activity zone">
				<el-option label="Zone one" value="shanghai" />
				<el-option label="Zone two" value="beijing" />
			</el-select>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">Query</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import {
		reactive
	} from 'vue'
	
	export default{
		name:'MQ2Hive',
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
