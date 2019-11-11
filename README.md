# Azure Sentiments

Using Azure Cognitive Services API to identify sentiments within a text.

## Setup

1. Create resources
```s
az login -u <username>

# Set common arguments
$location="<location>"
$group="<group>"

# Create resources
az group create -l $location -n $group
az cognitiveservices account create --kind textanalytics -n <resource_name> -l $location -g $group --sku F0

# Get the endpoint
az cognitiveservices account list --query [0].endpoint -o tsv
```

2. Configure `.env`

## Running it

```s
npm i
node src/index.js
```
