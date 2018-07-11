<template>
	<div>
		<el-container v-for="item in list" :key="item.id" >
			 <el-aside width="100px"><img :src="item.avatarSrc"></el-aside>
			 <el-main>
			 	<dl >
			 		<dt><a href="#">{{ name }}</a><span>·</span><span>{{ item.date | analyzeDateAgo }}</span></dt>
				 	<dt @click="thisBlogInfo(item)">{{ item.title }}</dt>
					<dd @click="thisBlogInfo(item)">{{ item.content | snippet}}</dd>
					<dd>
						<el-tooltip class="item" effect="dark" content="编辑" placement="top">
					      <el-button><router-link v-bind:to="'/editBlog/' + item.id"><i class="el-icon-edit"></i></router-link></el-button>
					    </el-tooltip>
					    <el-tooltip class="item" effect="dark" content="删除" placement="top">
					      <el-button @click="deleteBlog(item.id)"><i class="el-icon-delete"></i></el-button>
					    </el-tooltip>
					    <el-tooltip class="item" effect="dark" content="喜欢" placement="top">
					      <el-button><i class="el-icon-star-off"></i></el-button>
					    </el-tooltip>
					</dd>
				</dl>
			</el-main>
		</el-container>
		<el-dialog
		  :title="thisBlog.date | analyzeDateComplete"
		  :visible.sync="dialogVisible"
		  width="60%"
		  :before-close="handleClose">
		  <h3>{{ thisBlog.title }}</h3>
		  <p>{{ thisBlog.content }}</p>
		  <div class="margin-top-20">
		  	<label>分类</label> 
		  	<span> {{ thisBlog.type }} </span>
		  </div>
		  <div class="margin-top-5">
		  	<label width="50px">标签</label>
		  	<span v-for="item in thisBlog.label" :key="item"># {{ item }} #</span>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
import {analyzeDateAgo} from '../date/analyzeDate.js'
import {analyzeDateComplete} from '../date/analyzeDate.js'
analyzeDateComplete
export default {
  name: 'BlogList',
  components: {
  },
  mounted:function(){
  	// console.log(this.list)
  	// console.log(analyzeDateAgo('2018//03/08 09:01'))
  },
  filters: {
  	analyzeDateAgo:function(value){
  		return analyzeDateAgo(value)
  	},
  	analyzeDateComplete:function(value){
  		return analyzeDateComplete(value)
  	}
  },
  data: function(){
  	return{
  		list:[
	  		
		],
		dialogVisible: false,
		thisBlog:{
			avatarSrc:'',
			title:'',
			date:'',
			content:'',
			id:'',
			type:'',
			label:''
		},
		name:'陈洁仪',
		search:""
  	}
  },
  methods:{
  	thisBlogInfo:function(event){
  		this.dialogVisible = true;
  		this.thisBlog = event;
  	},
  	handleClose(done) {
	    done()
	},
	deleteBlog(id){
		this.dialogVisible = false;
		this.$confirm('此操作将永久删除该博文, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	this.$ajax.delete("https://wd2999235647yrmmaw.wilddogio.com/blogs/" + id + ".json")
				  .then((data) => {
				  	if(data.status == 200){
				  		this.$router.go(0)
				  		this.$message({
				            type: 'success',
				            message: '删除成功!'
				        });

				  	}
				  })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
	}
  },
  created(){
  	this.$ajax.get("https://wd2999235647yrmmaw.wilddogio.com/blogs.json")
  			  .then(res => {
  			  	var blogData = []
  			  	for(let key in res.data){
  			  		res.data[key].id = key
  			  		res.data[key].avatarSrc = require("./commont/images/Avatar_chenjieyi.jpg")
  			  		blogData.push(res.data[key])
  			  	}
  			  	this.list = blogData
  			  	// console.log(this.list)
  			  	// this.list = res.data
  			  	// console.log(this.list)
  			  })
  },
  computed:{
  	filteredBlogs:function(){

  	}
  }
}
</script>

<style scoped>
	a{
		font-weight: 600;
		color: #000;
	}
	a:active,a:hover{
		color: #409EFF;
	}
	p{
		text-indent: 2em;
	}
	.el-button{
		border: none;
		background: none;
		outline: none;
		margin-right: 20px;
		width: auto;
		height: auto;
		padding: 0;
	}
	.el-button i{
		font-size: 18px;
		color: #657786;
		cursor: pointer;
	}
	.el-button i:hover{
		color: #409EFF;
	}
	.el-container{
		border-bottom: solid 1px #e6ecf0;
		padding: 10px 20px;
		cursor: pointer;		
		margin: 0;
	}
	.el-container:hover{
		background-color: #f5f8fa;
	}
	dd,dt{
		word-break: break-all;
	}
	dt:first-child{
		font-size: 14px;
		margin-bottom: 5px;
	}
	dt:first-child span{
		color: #657786;
		padding: 0 5px;
	}
	dd{
		margin: 5px 0;
		font-size: 14px;
	}
	dd:last-child {
		margin-top: 20px;
	}
	.el-main{
		padding: 0
		
	}

	/*.images{
		width: 54px;
		height: 54px;
		margin: 5px 21px;
		border: solid 4px #409EFF;
		border-radius: 100%;
	}*/
	img{
		width: 50px;
		height: 50px;
		/*margin: 1px;*/
		margin: 5px 21px;
		/*border: solid 2px #fff;*/
		border-radius: 100%;
	}

	
</style>