export function getDateDefault(){
	let d = new Date()
	let ny = d.getFullYear()//年份 yyyy
	let nm = d.getMonth() + 1 < 10 ? "0" + (d.getMonth()+1) : (d.getMonth()+1)//月 mm
	let nd = d.getDate() <  10 ? "0" + (d.getDate()) : d.getDate()//日 dd
	let nhh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()//时 hh
	let nmm = d.getMinutes() < 10 ? "0" +  d.getMinutes() : d.getMinutes()//分mm

	return ny + '/' + nm + '/' + nd + ' ' + nhh + ':' + nmm
}