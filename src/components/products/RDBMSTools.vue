<template>

	<div>
		<div class="common-layout">
			<el-container>
				<el-header>这里是RDBMS工具集合</el-header>
				<el-container>
					<el-aside width="200px" >
						<!-- 这里选择对应的子工具 -->
						<el-col :gutter="20">
							<el-button type="primary" plain>hive->rdbms</el-button>
							<el-button type="primary" plain>rdbms->clickhouse</el-button>
						</el-col>

					</el-aside>

					<!-- 输入具体的同步信息 -->
					<el-main>
						<!-- 这里抽取出为一个组件 -->
						<el-form :inline="true" :model="formInline" class="demo-form-inline">
							<el-form-item label="Approved by">
								<el-input v-model="formInline.user" placeholder="Approved by" />
							</el-form-item>
							<el-form-item label="Activity zone">
								<el-select v-model="formInline.region" placeholder="Activity zone">
									<el-option label="Zone one" value="shanghai" />
									<el-option label="Zone two" value="beijing" />
								</el-select>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="onSubmit">Query</el-button>
							</el-form-item>
						</el-form>


					</el-main>
				</el-container>
			</el-container>
		</div>
	</div>
</template>

<script>
	import {
		reactive
	} from 'vue'


	export default {
		name: 'RDBMSTools',
		data() {
			return {
				formInline: reactive({
					user: '',
					region: '',
				})
			}
		},

		components: {

		},

		methods: {
			onSubmit: function() {
				console.log("submit")
			}
		},
	}
</script>

<style>
</style>
