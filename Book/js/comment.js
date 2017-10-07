function getByClass(oParent,sClass)
{
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];
	var i = 0;
	
	for(i=0; i<aEle.length; i++)
	{
		if(aEle[i].className == sClass)
		{
			aResult.push(aEle[i]);
		}
	}
	return  aResult;
}
function getDouble(obj)
{
	if(obj<10)
	{
		return '0' + obj;
	}
	else
	{
		return '' + obj;
	}
}

window.onload = function()
{
	var oSubmit = document.getElementById('tijiao');
	var oUserName = document.getElementById('userName');
	var oTxt = document.getElementById('text');
	var oConTxt = document.getElementById('cmton');
	var oLength = document.getElementById('tiaoshu');
	
	oLength.innerHTML = getByClass(oConTxt,'reply').length;
	
	
	oSubmit.onclick = function()
	{
		var time = new Date();
		var oTime = getDouble(time.getFullYear()) + '-' + (getDouble(time.getMonth() + 1)) + '-' + getDouble(time.getDay()) + '  ' + getDouble(time.getHours()) + ':' + getDouble(time.getMinutes()) + ':' + getDouble(time.getSeconds());
		
		var oDiv = document.createElement('div');
		var oC_div = document.createElement('div');
		var oC_userName = document.createElement('span');
		var oC_timer = document.createElement('span');
		var oC_content = document.createElement('p');
		var oC_del = document.createElement('p');
		var oC_del_a = document.createElement('a');
		
		oDiv.className = 'reply';
		oC_div.className = 'userInfo';
		oC_userName.className = 'userName';
		oC_timer.className = 'replyTime';
		oC_content.className = 'replyContent';
		oC_del.className = 'operation';
		oC_del_a.className = 'rLast';
		
		if(oUserName.value == '')
		{
			oC_userName.innerHTML = '匿名用户<span style="font-size:12px; color:#ccc; font-weight:normal;">(默认用户名)</span>';
			oC_content.innerHTML = oTxt.value;
		}
		else
		{
			oC_userName.innerHTML = oUserName.value;
			oC_content.innerHTML = oTxt.value;
		}
		
		oUserName.value = '';
		oTxt.value = '';
		
		oC_timer.innerHTML = oTime;
		oC_del_a.innerHTML = '';
		oC_del_a.href = 'javascript:;';
		
		oConTxt.appendChild(oDiv);
		oDiv.appendChild(oC_div);
		oC_div.appendChild(oC_userName);
		oC_div.appendChild(oC_timer);
		oDiv.appendChild(oC_content);
		oDiv.appendChild(oC_del);
		oC_del.appendChild(oC_del_a);
		
		oLength.innerHTML = getByClass(oConTxt,'reply').length;
		over_out();
	}
	
	
	
	over_out();
	
	
	//鼠标移入移出
	function over_out()
	{
		for(var i=0;i<getByClass(oConTxt,'reply').length;i++)
		{
			getByClass(oConTxt,'reply')[i].zns = i;
			getByClass(oConTxt,'reply')[i].onmouseover = function()
			{
				this.style.background = '#70c9e3';
				getByClass(oConTxt,'operation')[this.zns].style.display = 'block';
			}
			getByClass(oConTxt,'reply')[i].onmouseout = function()
			{
				this.style.background = '';
				getByClass(oConTxt,'operation')[this.zns].style.display = 'none';
			}
		}
	}
	
	function del()
	{
		
	}
}