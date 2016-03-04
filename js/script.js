window.onload = function()
{
	var a;
	nom_div("rango").addEventListener('change',function(event)
	{
		
		capicua(this.value);

	});

	function nom_div(div)
	{
		return document.getElementById(div);
	}

	function capicua(rango)
	{
		var triangulo = "";
		for (var i=1 , a="1"; i <= rango; i++)
		{
			var resultado = Number(a) * Number(a);
			triangulo += "<div><div class='valores opera'>"+(a + "x" + a)+"</div>" + 
			"<div class='valores resultado>"+(resultado)+"</div></div>";
			//console.log(,resultado);
			a += "1";
		}
		nom_div("capicua").innerHTML = triangulo;
	}

};