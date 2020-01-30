
// 实现思路：
	
	// 月份是从0开始的 , 礼拜日是0
	
	// 每个月开始的第一天是礼拜几
	
	// 每个月总共有多少天（闰年）
	

// 代码实现：

// 年月的下拉框
	var yearSelect = document.getElementById("year");
	var monthSelect = document.getElementById("month");

// 获取日期显示区
	var ri = document.getElementById("date");
	

/**
 * 初识化时间
 */
var startYear = 1980;
var endYear = 2050;
function init_date(){
	for (var year=startYear; year<=endYear; year++) {
		var option = document.createElement("option");
		option.value = year;
		option.innerHTML = year;
		yearSelect.appendChild(option)
	}
	for (var month=1; month<=12; month++) {
		var option = document.createElement("option");
		option.value = month;
		option.innerHTML = month;
		monthSelect.appendChild(option)
	}
	// 需要设置当前的年月
	var now = new Date();
	var y = now.getFullYear();
	var m = now.getMonth()+1;
	yearSelect.value = y;
	monthSelect.value = m;
	// 渲染日期
	show_dates(y,m);
	
	// 手动调整了年月
	yearSelect.onchange = function(){
		show_dates(yearSelect.value,monthSelect.value);
	}
	monthSelect.onchange = function(){
		show_dates(yearSelect.value,monthSelect.value);
	}
	
	// 上个月
	var prev = document.querySelector(".prev");
	prev.onclick = function(){
		var oldMon = monthSelect.value;  // 之前的月
		oldMon--;  // 月份减1
		if(oldMon==0){  // 月份为0
			oldMon = 12;    // 上一年的12月
			var oldYear = yearSelect.value;   // 上一年
			oldYear--;
			yearSelect.value = oldYear;
		}
		monthSelect.value = oldMon
		show_dates(yearSelect.value,monthSelect.value);
	}
	// 下个月
	var next = document.querySelector(".next");
	next.onclick = function(){
		var oldMon = monthSelect.value;  // 之前的月
		oldMon++;  // 月份减1
		if(oldMon==13){  // 月份为13
			oldMon = 1;    // 下一年的1月
			var oldYear = yearSelect.value;   // 上一年
			oldYear++;  
			yearSelect.value = oldYear;
		}
		monthSelect.value = oldMon
		show_dates(yearSelect.value,monthSelect.value);
	}
	
}
init_date();


/**
 * 显示对应的日期
 * @param {Object} year   年份
 * @param {Object} month  月份 （已经是正常月份，加了1）
 */
function show_dates(year,month){
	// 每个月有多少天
	var isRN =  year%400==0 ? 1 :((year%100!=0 && year%4==0) ? 1:0);   // 这是判断是否是闰年
	var dayNum = [31,28+isRN,31,30,31,30,31,31,30,31,30,31]
	
	// 当前年月的第一天是礼拜几
	var d = new Date(year,month-1,1);  // 获得每个月的第一天的时间对象
	var libai = d.getDay();
	// 创建空的li
	var listr = ""
	for (var i=0; i<libai; i++) {
		listr += "<li></li>"
	}
	console.log(listr)
	ri.innerHTML = listr;
	// 创建有数字的li  [这个月有多少天]
	for (var j=1; j<= dayNum[month-1]; j++) {
		listr += "<li>"+j+"</li>"
	}
	ri.innerHTML = listr;
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
