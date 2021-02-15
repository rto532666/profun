function submit() {
            pred = document.getElementById("img_detected")
            var obj_url = document.getElementById("img_url").value
            pred.innerHTML = "<h2>Loading...</h2>";
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 400) { pred.innerHTML = "<h2>Please input the url of a valid image.</h2>"; } 
                    else if (xhr.status === 200) { pred.innerHTML = "<img style='max-width:100%; display:block;' id='base64image'   src='data:image/jpeg;base64, " + xhr.response + "' />"; } 
                    else { pred.innerHTML = "<h2>Error</h2>"; }
                }
            }

            xhr.open("POST", 'https://ub5ji6m2w0.execute-api.us-east-1.amazonaws.com/Production/', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                img_url: obj_url
            }));
        }
        submit();
        document.getElementById('img_url').onkeydown = function(e){
            if(e.keyCode == 13){
                submit()
            }
        };