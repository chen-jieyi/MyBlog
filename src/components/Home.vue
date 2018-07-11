<template>
	<el-container>
        <el-aside width="250px" ><about v-bgcolor></about></el-aside>
    	<el-main v-bgcolor><blog-list ></blog-list></el-main>
  	</el-container>
</template>

<script>
import About from './About'
import BlogList from './BlogList'

export default {
  name: 'Home',
  components: {
  	About,
  	BlogList
  }
}
</script>

<style scoped>
	.el-container{
		max-width: 1060px;
		height: auto;;
		margin: 10px auto;
	}
	.el-aside {
	    /*background-color: #D3DCE6;*/
	    /*color: #333;*/
	    text-align: center;
	    margin: 10px;
	    /*padding: 10px;*/
	  }
	  
	  .el-main {
	    /*background-color: #E9EEF3;*/
	    /*color: #333;*/
	    max-width: 1060px;
	    min-width: 560px;
	    margin: 10px;
	    padding: 0;
	    /*text-align: center;*/
	  }
</style>