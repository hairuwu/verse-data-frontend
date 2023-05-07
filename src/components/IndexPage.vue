<template>
	<div>

		<el-carousel indicator-position="outside">
			<el-carousel-item v-for="imgName in slogans" :key="imgName">
				<el-image style="width: 100%; height: 100%" :src="require(`../assets/imgs/${imgName}.png`)" />
			</el-carousel-item>
		</el-carousel>

		<div class="common-layout">
			<el-container>
				<el-header>
					<!-- <el-text tag="b" size="large">Data Verse - 让每一比特数据都能发挥价值</el-text> -->
				</el-header>

				<el-divider />

				<el-main>
					<el-space wrap :size="large">
						<!-- <el-text tag="b" size="large">Verse Data - 让每一比特数据都能发挥价值</el-text> -->
					</el-space>

					<el-space wrap :size="large">
						<div>
							<img alt="Verse Data" style="width:100% ;height: 100%"
								src="../assets/imgs/verse-data-feature.png">
						</div>

					</el-space>
				</el-main>

				<el-divider />

				<el-footer>
					<el-tag>
						联系我们 hairuwu@qq.com
					</el-tag>

				</el-footer>
			</el-container>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'IndexPage',
		data() {
			return {
				slogans: [
					'slogan-1',
					'slogan-2',
					'slogan-3',
					'slogan-4',
				]
			}
		},

		methods: {

		}
	}
</script>

<style>
	.el-carousel__item h3 {
		display: flex;
		color: #475669;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}
</style>
