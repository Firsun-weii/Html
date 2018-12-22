window.onload=function(){
			//var img = document.getElementsByTagName('img');
			var div = document.getElementsByClassName('banner');
			var i = 0;
			function visit(){
				div[i%5].style.display = 'none';
				i++;
				div[i%5].style.display = 'block';
			}
			setInterval(visit,1500);
		}