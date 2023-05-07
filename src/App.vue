<template id="app">
	<!-- <img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App" /> -->
	<!-- <el-button type="primary">快速开始</el-button> -->

	<!-- 布局 -->
	<div class="common-layout">
		<el-container>

			<!-- 头部 -->
			<el-header>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
					@select="handleSelect">
					<el-menu-item index="0" collapse-transition=false>
						<div>
							<!-- <el-image style="width: 100px; height: 100px" src="./assets/imgs/verse-data.jpg"  /> -->
							<img alt="Verse Data" style="width: 90px ;height: 50px" src="./assets/imgs/verse-data-small.png">
						</div>
						<div index="-1"><el-text tag="b" size="default">万象数据</el-text></div>
					</el-menu-item>
					<el-text tag="b" size="large">"让每一比特数据都能发挥价值"</el-text>


					<div class="flex-grow" />

					<!-- 首页 -->
					<el-menu-item index="1">首页</el-menu-item>

					<!-- 产品 -->
					<el-sub-menu index="2">
						<template #title>产品</template>
						<el-menu-item index="2-1">DBLand-新一代数据库管理软件</el-menu-item>
						<el-menu-item index="2-2">面向大数据的湖仓一体架构</el-menu-item>
						<el-menu-item index="2-3">面向数字孪生的BIM数据管理</el-menu-item>
						<el-menu-item index="2-4">大数据ETL工具</el-menu-item>
					</el-sub-menu>

					<!-- 研究 -->
					<el-sub-menu index="3">
						<template #title>研究</template>
						<el-menu-item index="3-1">大数据存储</el-menu-item>
						<el-menu-item index="3-3">大数据计算</el-menu-item>
						<el-sub-menu index="3-4">
							<template #title>数据管理</template>
							<el-menu-item index="3-4-1">HTAP分析</el-menu-item>
							<el-menu-item index="3-4-2">BIM数据管理</el-menu-item>
						</el-sub-menu>
					</el-sub-menu>

					<!-- 关于我们 -->
					<el-sub-menu index="4">
						<template #title>关于我们</template>
						<el-menu-item index="4-1">团队介绍</el-menu-item>
						<el-menu-item index="4-2">加入我们</el-menu-item>
					</el-sub-menu>
					
				</el-menu>
			</el-header>

			<!-- 主界面 -->
			<!-- <img alt="Verse Data" style="width: 100% ;height: 600px" src="./assets/imgs/wang-xiang-data.png"> -->
			
			<el-main>
				<component :is="pageName"></component>
				<!-- <div>{{pageName}}</div> -->
			</el-main>

			<!-- 底部 -->
			<el-footer>

			</el-footer>
		</el-container>
	</div>
</template>

<script>
	// 引入子组件
	import JoinUs from "./components/JoinUs.vue"
	import AboutUs from "./components/AbooutUs.vue"
	import IndexPage from './components/IndexPage.vue'
	import ETLTools from './components/products/ETLTools.vue'
	import DataLakeAndDataWare from './components/products/DataLakeAndDataWare.vue'
	
	// 导航栏脚本
	import {
		ref
	} from 'vue'
	// import HelloWorld from './components/HelloWorld.vue'
	
	var activeIndex = ref('1')

	// 将本组件导出
	export default {
		// 导出的组件名称
		name: 'App',

		data(){
			return {
				activeIndex: activeIndex,
				pageName: 'IndexPage',
			}
		},

		// 若要将导入的组件暴露给模板，我们需要在 components 选项上注册它。这个组件将会以其注册时的名字作为模板中的标签名。
		components: {
			// HelloWorld
			JoinUs,
			AboutUs,
			IndexPage,
			ETLTools,
			DataLakeAndDataWare
		},


		methods:{
			// 这里不要使用箭头函数，不然this = undefined 
			handleSelect: function(key, keyPath){
				console.log(key, keyPath)
				
				switch(key){
					case '0':
						this.pageName = 'IndexPage';
						break;
					case '1':
						this.pageName = 'IndexPage';
						break;
					case '2-2':
						this.pageName = 'DataLakeAndDataWare';
						break;
					case '2-4':
						this.pageName = 'ETLTools';
						break;
					case '4-1':
						this.pageName = 'AboutUs';
						break;
					case '4-2':
						this.pageName = 'JoinUs';
						break;
				}
				
			},
			
		}
	}
</script>


<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.flex-grow {
		flex-grow: 1;
	}
</style>
