<template>
	<div class="about">
		<div>
			<img class="avatar" :src="info.avatarsrc">
			<h4>{{ info.name }}</h4>
			<h6>@{{ info.blogname }}</h6>
			<div class="info-count">
				<a href="#"><span>博文{{ info.blogcount }}</span></a>
				<a href="#"><span>粉丝{{ info.follower }}</span></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
  data: function(){
  	return{
  		info:{
  			avatarsrc:require("./commont/images/Avatar_chenjieyi.jpg"),
			name:"陈洁仪",
	  		blogname:"chenjieyi",
	  		blogcount:"7",
	  		follower:"2"
		}  		
  	}
  }
}
</script>

<style scope>
	.about{
		/*background-color: #fff;*/
		/*margin: 10px;*/
		padding: 20px 10px 40px;
	}
	.avatar{
		height:80px;
		width:80px;
		border-radius: 100%;
	}
	.info-count{
		margin-top: 20px;
	}
	.info-count a{
		margin: auto 15px; 
	}
	h6{
		font-weight: normal;
		color: #657786;
	}
</style>