/*	
	解析时间 
	当年份小于当前年份则显示 “yyyy年mm月dd日”
	当年非当天显示“mm月dd日”
	当天超过一小时“XX小时”
	当天一小时内“xx分钟”
*/

export function analyzeDateAgo (date) {
	if (date == "" || date == null) {
		return ""
	}
	let d = new Date()
	let ny = d.getFullYear()//年份 yyyy
	let nm = d.getMonth()+1//月 mm
	let nd = d.getDate() //日 dd
	let nhh = d.getHours()//时 hh
	let nmm = d.getMinutes() //分mm
	//return ny+'-'+nm+'-'+nd+'-'+nhh+'-'+nmm;
	//let date = date;
	let yyyy = parseInt(date.slice(0,4))
	let mm = parseInt(date.slice(5,7))
	let dd = parseInt(date.slice(8,10))
	let hh = parseInt(date.slice(11,13))
	let mmm = parseInt(date.slice(14,16))

	if(yyyy < ny){
		return yyyy + "年" + mm + "月" + dd + "日"
	}
	
	if(yyyy == ny&& mm == nm && dd == nd ){
		if (((nhh*60 + nmm) - (hh*60 + mmm)) >= 60) {
			return parseInt(((nhh*60 + nmm) - (hh*60 + mmm))/60) + "小时前"
		}
		else{
			if(((nhh*60 + nmm) - (hh*60 + mmm)) == 0){
				return "刚刚"
			}
			else{
				return ((nhh*60 + nmm) - (hh*60 + mmm))+"分钟前"
			}			
		}
	}
	else{
		return mm + "月" + dd + "日"
	}
}

export function analyzeDateComplete(date){
	let yyyy = date.slice(0,4)
	let mm = date.slice(5,7)
	let dd = date.slice(8,10)
	let pp = parseInt(date.slice(11,13)) > 13 ? "下午" : "上午"
	let hh = parseInt(date.slice(11,13)) > 13 ? (parseInt(date.slice(11,13))-12) : parseInt(date.slice(11,13))
	let mmm = date.slice(14,16)

	return pp + hh + ":" + mmm + " " + yyyy + "年" + mm + "月" + dd + "日"
	// return yyyy
}