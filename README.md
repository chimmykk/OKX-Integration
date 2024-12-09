# OKX-MINTPAD Claim Badge API Endpoint Verification Endpoint

## Overview
The `/mintcheck` API endpoint verifies the balance of a specific wallet address for a predefined token ID on a smart contract. If the balance is greater than 0, the API returns `true`; otherwise, it returns `false`.

## Endpoint

### URL
- `https://yourdomain/mintcheck?address=${address}`
- `http://localhost:3000/mintcheck?address=${address}`

### Method
`GET`

## Query Parameters

| Parameter | Type   | Description                                    | Required |
|-----------|--------|------------------------------------------------|----------|
| `address` | String | The wallet address to verify (Ethereum format) | Yes      |

## Response

### Response Example
```json
{
  "code": 0,
  "data": true
}
```

### Response Fields

| Field | Type    | Description                                                  |
|-------|---------|--------------------------------------------------------------|
| `code`| Integer | Always 0. Indicates the response status.                     |
| `data`| Boolean | `true` if the wallet has a balance greater than 0; `false` otherwise. |
