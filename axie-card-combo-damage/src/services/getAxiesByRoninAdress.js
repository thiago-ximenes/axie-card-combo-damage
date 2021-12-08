// 0x9e7339d3ef119038fb73b603d6dfbec7a21c621f
const URL_API = 'https://graphql-gateway.axieinfinity.com/graphql';

export default async function axieApi(roninAddress)
{
    const json = {
      "operationName": "GetAxieBriefList",
      "variables": {
        "owner": roninAddress,
      },
      "query": "query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  name\n  stage\n  class\n  breedCount\n  image\n  title\n  battleInfo {\n    banned\n    __typename\n  }\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    id\n    name\n    class\n    type\n    specialGenes\n    __typename\n  }\n  __typename\n}\n"
    }
    const promise = await fetch(URL_API, {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const result = await promise.json();
    console.log(result);
    return result.data.axie;
  }
