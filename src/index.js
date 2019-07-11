const request = require('request');

const endpoint = 'https://brazilsouth.api.cognitive.microsoft.com/text/analytics/v2.1'

// You need to input your own keys
const key1 = '664b4d4e309848929cdd419d869f95aa'
const key2 = '56a76e1d661f43879b00c21907203b22'

headers = {
    'Ocp-Apim-Subscription-Key': key1,
    'Content-Type': 'application/json'
}

function logOutput(err, response, body) {
    if (err) {
        console.error(err)
    } else {
        console.log(body)
    }
}

function detectSentiment(inputText, language) {
    const body = JSON.stringify({
        "documents": [
            {
                "id": "1",
                "text": inputText,
                "language": language
            }
        ]
    })
    var options = {
        url: endpoint + '/sentiment',
        method: 'POST',
        headers: headers,
        body: body,
    }
    request.post(options, logOutput)
}

detectSentiment('I am happy', 'en')