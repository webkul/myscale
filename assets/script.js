var fileUpload = document.getElementById("file_upload");
fileUpload.addEventListener("change", function(){
	var fileSvg = fileUpload.files[0];
	var reader = new FileReader();
	reader.readAsText(fileSvg);	
	reader.onload = function(){
		document.getElementById("svg_preview").innerHTML = reader.result;
		document.getElementById("svg_form").style.display = "block";
	}
});

var playGround = function(){
	var resizeValue = document.getElementById("resize_value").value;
	document.getElementsByTagName("svg")[0].setAttribute("id","svg_resize");
	document.getElementsByTagName("svg")[0].setAttribute("width", resizeValue);
	document.getElementsByTagName("svg")[0].setAttribute("height", resizeValue);
	document.getElementById("download_wrapper").style.display = "block";
	var fileRename = "icon-" + resizeValue + "px";
	document.getElementById("data").setAttribute("download", fileRename);
}

// SVG to DATA URL Library

function exportResizedSvg() {
                var svg = document.getElementById("svg_resize");
				var img = document.getElementById("fromcanvas");
				svg.toDataURL("image/png", {
					callback: function(data) {
						img.setAttribute("src", data)
						var a = document.querySelector("#data")
						a.href = data
					}
				})
			}