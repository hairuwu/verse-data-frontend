<template>
	<!-- 这里是MQ工具集 -->
	<div>
		<div class="common-layout">
			<el-container>
				<el-header>这里是MQ工具集合</el-header>
				<el-container>
					<el-aside width="200px" >
						<!-- 这里选择对应的子工具 -->
						<el-col :gutter="20">
							<el-button type="primary" plain  @click='mqFuncChoice("mq2hive")'>mq2hive</el-button>
							<el-button type="primary" plain @click='mqFuncChoice("hive2mq")'>hive2mq</el-button>
						</el-col>
					</el-aside>
	
					<!-- 输入具体的同步信息 -->
					<el-main>
						<!-- 这里抽取出为一个组件 -->
						<component :is="mqToolsName"></component>	
					</el-main>
				</el-container>
			</el-container>
		</div>
	</div>
</template>

<script>
	import MQ2Hive from './mqTools/MQ2Hive.vue'
	
	export default {
		name:"MQTools",
		data(){
			return {
				mqToolsName:'null',
			}
		},
		
		components:{
			MQ2Hive,
		},
		
		methods:{
			mqFuncChoice: function(name){
				switch(name){
					case 'mq2hive':
						this.mqToolsName = 'MQ2Hive';
						break;
					case 'hive2mq':
						this.mqToolsName = 'Hive2MQ';
						break;
				}
			}
		}
		
	}
</script>

<style>
</style>
