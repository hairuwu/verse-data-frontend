<template>
	<div>
		<div>
			<div class="common-layout">
				<el-container>
					<!-- header -->
					<el-header>
						这里提供了实用的大数据数据ETL工具
					</el-header>

					<!-- 核心显示内容，根据上面funcChoice的参数来展示不同的内容 -->
					<el-main>
						<!-- 选项 -->
						<el-row :gutter="12">
							<el-col :span="8">
								<el-card shadow="hover">
									<el-button type="primary" plain @click='funcChoice("rdbms")'>RDBMS</el-button>
								</el-card>
							</el-col>
							<el-col :span="8">
								<el-card shadow="hover">
									<el-button type="primary" plain @click='funcChoice("dataware")'>DataWare</el-button>
								</el-card>
							</el-col>
							<el-col :span="8">
								<el-card shadow="hover">
									<img alt="Verse Data" style="width:400px ;height: 200px" src="../../assets/imgs/mqtools.png">
									<el-button type="primary" plain @click='funcChoice("mqAndOthers")'>MQ / Others</el-button>
								</el-card>
							</el-col>
						</el-row>

						<!-- 具体展示的界面 -->
						<component :is="toolsName"></component>
					</el-main>


					<el-footer>Footer</el-footer>
				</el-container>
			</div>
		</div>
		<div>

		</div>

	</div>

</template>

<script>
	import RDBMSTools from './RDBMSTools.vue'
	import MQTools from './MQTools.vue'

	export default {
		name: 'ETLTools',
		data() {
			return {
				toolsName: '',
			}
		},

		components: {
			RDBMSTools,
			MQTools
		},

		methods: {
			funcChoice: function(key) {
				console.log(key)
				switch (key) {
					case 'rdbms':
						console.log('进来了')
						this.toolsName = 'RDBMSTools';
						break;
					case 'mqAndOthers':
						this.toolsName = 'MQTools';
						break;
				}
			}
		}
	}
</script>

<style>
	.el-row {
		margin-bottom: 20px;
	}

	.el-row:last-child {
		margin-bottom: 0;
	}

	.el-col {
		border-radius: 4px;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
		color: purple;
	}
</style>
