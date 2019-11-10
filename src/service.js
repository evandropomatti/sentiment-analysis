const request = require('request');
const readline = require('readline');

require('dotenv').config()

const endpoint = `${process.env.AZURE_COGNITIVE_SERVICES_ENDPOINT}/text/analytics/v2.1`
const language = 'en'
const key1 = process.env.AZURE_KEY_1

headers = {
    'Ocp-Apim-Subscription-Key': key1,
    'Content-Type': 'application/json'
}

const getFace = (score) => {
    if (score < 0.25) {
        return '😢'
    } else if (score <= 0.50) {
        return '😒'
    } else if (score < 0.80) {
        return '😃'
    } else {
        return '😁'
    }
}

const logOutput = (err, response, body) => {
    if (err) {
        console.error(err)
    } else {
        const response = JSON.parse(body);
        const score = response.documents[0].score
        const face = getFace(score)
        console.log(`${face}     score: ${score}`)
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

module.exports = { getFace, detectSentiment };