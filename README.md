# Azure Sentiments <img src=".docs/Cognitive-Services.svg" width=30 />

Using Azure Cognitive Services API to identify sentiments within a text.

```sh
# input
'Feeling happy'

# output
😁 positive: 0.96% 
😐 neutral: 0.03%
☹️ negative: 0.01%
```

### Infrastructure Setup

```sh
location='eastus2'
group='rg-sentiment'

# Create resources
az group create -l $location -n $group
az cognitiveservices account create --kind textanalytics -n 'cog-name' -l $location -g $group --sku F0

# Get the endpoint
az cognitiveservices account list --query [0].endpoint -o tsv
```

### Running it

```sh
# prepare the env
cp example.env .env

# run it
yarn install
yarn dev
```
