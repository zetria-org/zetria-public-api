document.addEventListener('DOMContentLoaded', function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        document.getElementById("url-box-vdf1v35d135v6s513v51s351v51xc").value = url;
    });
    document.getElementById("share-button-sfcdxfvcs54654n65gbdfxdawdscd6561").addEventListener("click", sendRequest);
});

function setAnimation(shareButton, response){
    console.log(response);
    shareButton.removeEventListener("click", sendRequest);
    shareButton.innerHTML = "分享完成";
    shareButton.classList.add("button-success-3531dv1f351v3wr51");
}

function sendRequest(shareButton){
    shareButton = document.getElementById("share-button-sfcdxfvcs54654n65gbdfxdawdscd6561");
    shareButton.classList.add("button-working-3e51f35cwe51315");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://www.zetria.org/lib/quick_upload_handler.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            setAnimation(document.getElementById("share-button-sfcdxfvcs54654n65gbdfxdawdscd6561"), xhr.response);
        }
    }
    xhr.send(JSON.stringify({
        'data': document.getElementById("url-box-vdf1v35d135v6s513v51s351v51xc").value
    }));
}