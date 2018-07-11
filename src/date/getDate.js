export function getDateDefault(){
	let d = new Date()
	let ny = d.getFullYear()//��� yyyy
	let nm = d.getMonth() + 1 < 10 ? "0" + (d.getMonth()+1) : (d.getMonth()+1)//�� mm
	let nd = d.getDate() <  10 ? "0" + (d.getDate()) : d.getDate()//�� dd
	let nhh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()//ʱ hh
	let nmm = d.getMinutes() < 10 ? "0" +  d.getMinutes() : d.getMinutes()//��mm

	return ny + '/' + nm + '/' + nd + ' ' + nhh + ':' + nmm
}