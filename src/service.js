const request = require('request');
const readline = require('readline');

require('dotenv').config()

const endpoint = `${process.env.AZURE_COGNITIVE_SERVICES_ENDPOINT}/text/analytics/v3.1`
const language = 'en'
const key1 = process.env.AZURE_KEY_1

headers = {
    'Ocp-Apim-Subscription-Key': key1,
    'Content-Type': 'application/json'
}

const logOutput = (err, response, body) => {
    if (err) {
        console.error(err)
    } else {
        const response = JSON.parse(body);
        const scores = response.documents[0].confidenceScores;
        
        console.log(`😁 positive: ${scores.positive}%`);
        console.log(`😐 neutral: ${scores.neutral}%`);
        console.log(`☹️ negative: ${scores.negative}%`);
    }
}

const post = (inputText, language) => {
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

const detectSentiment = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Type your text: ', (value) => {
        post(value, language);
        rl.close();
    });
}

module.exports = { detectSentiment };