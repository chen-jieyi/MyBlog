<template>
	<div class="blog-add">
		<h3>编辑博文</h3>
	    <el-form ref="form" :model="form" label-width="80px" v-if="!show">
	    	<el-form-item label="博文标题">
			    <el-input 
			        size="small"
			        placeholder="请输入博文标题"
			        v-model="form.title"
			        clearable>
			    </el-input>
			</el-form-item>
	    	<el-form-item label="博文内容">
			    <el-input :rows="10" type="textarea" v-model="form.content"></el-input>
			</el-form-item>
			<el-form-item label="分类">
			    <el-select v-model="form.type" placeholder="请选择分类">
			      <el-option v-for="item in blogType" :label="item.label" :value="item.value"></el-option>
			    </el-select>
			</el-form-item>
			<el-form-item label="标签">
			    <el-checkbox-group v-model="form.label">
			      <el-checkbox v-for="items in checkbox" :label="items" name="type"></el-checkbox>
			    </el-checkbox-group>
			</el-form-item>
			<el-form-item class="btn-right">
				<el-button size="small" @click="$router.go(-1)">取消</el-button>
				<el-button size="small" type="warning" @click="dialogVisible = true">预览</el-button>
			    <el-button size="small" type="primary" @click.prevent="saveBlog">保存</el-button>			    <!-- prevent 阻止点击刷新 --> 
			</el-form-item>
	    </el-form>
	    <el-dialog
		  title="预览"
		  :visible.sync="dialogVisible"
		  width="50%"
		  :before-close="handleClose">
		  <h3>{{ form.title }}</h3>
		  <p>{{ form.content }}</p>
		  <div class="margin-top-20">
		  	<label>分类</label> 
		  	<span> {{ form.type }} </span>
		  </div>
		  <div class="margin-top-5">
		  	<label width="50px">标签</label>
		  	<span v-for="item in form.label" :key="item"># {{ item }} #</span>
		  </div>
		</el-dialog>
		<div class="success-tooltip" v-if="show">
			<h2>添加博文成功！</h2>
			<p>3秒后，自动跳转到首页...</p>
		</div>
	</div>
</template>

<script>
	import {getDateDefault} from '../date/getDate.js'
	import Home from './Home'
	export default {
		name:"blog-add",
		data(){
			return{
				form:{
					
				},
				checkbox:['vue','jq','h5','css3','c#'],
				blogType:[{
					label:"前端",
					value:"前端"
				},
				{
					label:"后端",
					value:"后端",
				},
				{
					label:"设计",
					value:"设计",
				}],
				dialogVisible: false,
				show:false
			}
		},
		methods:{
			saveBlog(){
				//console.log(this.form);
				this.$ajax.put("https://wd2999235647yrmmaw.wilddogio.com/blogs/" + this.$route.params.id + ".json",this.form)
				.then((data) => {
					// console.log(data);
					if (data.status == "200") {
						this.successTip();
					}
				})
			},
			handleClose(done) {
			    done();
			},
			successTip() {
		        this.$message({
		          message: '修改成功！',
		          type: 'success'
		        });
		    }
		},
		created(){
			this.$ajax.get("https://wd2999235647yrmmaw.wilddogio.com/blogs/" + this.$route.params.id + ".json")
				.then((data) => { 
					// console.log(data)
					this.form = data.data
				})
		}
	}
</script>

<style scoped>
	.blog-add{
		min-width: 560px;
		max-width: 1260px;
		margin: 10px auto;
		background-color: #fff;
		padding: 10px 20px 10px 10px;
	}
	.el-form{
		/*width: 100%;*/
	}
	.btn-right{
		text-align: right;
	}
	span{
		padding: 0 10px;
	}
	.margin-top-20{
		margin-top: 20px;
	}
	.margin-top-10{
		margin-top: 10px;
	}
	.margin-top-5{
		margin-top: 5px;
	}
	.success-tooltip{
		padding: 20px;
		text-align: center;
	}
	h3{
		/*padding-left: 10px;*/
		padding: 0 10px 10px 10px ;
		border-bottom: solid 1px #;
	}
</style>