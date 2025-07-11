//设置Bing每日壁纸作为背景图的函数
		fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US')
		    .then(response => response.json())
		    .then(data => {
		        const imageUrl = 'https://www.bing.com' + data.images[0].url;
		        document.body.style.backgroundImage = `url(${imageUrl})`;
		    })
		    .catch(error => console.error('Error fetching Bing image:', error));
			
		//获取当前时间实时刷新函数
		 function displayTime() {
		            var currentTime = new Date(); // 创建一个Date对象，它将包含当前的日期和时间
		            
		            var hours = currentTime.getHours(); // 获取小时数 (0-23)
		            var minutes = currentTime.getMinutes(); // 获取分钟数 (0-59)
		            var seconds = currentTime.getSeconds(); // 获取秒数 (0-59)
		            
		            // 如果分钟或秒数小于10，则在其前面添加0，以确保格式一致（如：09:05:08）
		            minutes = (minutes < 10 ? "0" : "") + minutes;
		            seconds = (seconds < 10 ? "0" : "") + seconds;
		            
		            // 将小时转换为12小时制，并确定AM或PM
		            var timeOfDay = (hours < 12) ? "AM" : "PM";
		            hours = (hours > 12) ? hours - 12 : hours;
		            hours = (hours == 0) ? 12 : hours; // 处理午夜(0小时)的情况
		            
		            var currentTimeStr ="Time："+timeOfDay+"  "+hours + ":" + minutes + ":" + seconds; // 组合时间字符串
		            document.getElementById("clock").innerHTML = currentTimeStr; // 将时间字符串插入到页面的指定元素中
		            
		            // 使用setTimeout函数每秒钟调用一次displayTime函数，实现时间的实时更新
		            setTimeout(displayTime, 1000);
		        }
		        
		        window.onload = function() {
		            displayTime(); // 页面加载完成后立即调用displayTime函数
					}