---
title: "Public Loader API"
---

# Public Loader API

## Retrieve the Configuration

### Endpoint

```
GET /api/loader/autoconfigure
```

### Response

```json
{
    "success": true,
    "network": {
        "nethash": "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988",
        "token": "SXP",
        "symbol": "SXP",
        "explorer": "https://explorer.swipechain.org",
        "version": 23
    }
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.swipechain.org:8443/api/loader/autoconfigure \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the Status

### Endpoint

```
GET /api/loader/status
```

## Response

```json
{
    "loaded": false,
    "now": 3034441,
    "blocksCount": -26,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.swipechain.org:8443/api/loader/status \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the Syncing Status

### Endpoint

```
GET /api/loader/status/sync
```

### Response

```json
{
    "syncing": true,
    "blocks": -31,
    "height": 3034446,
    "id": "16245805386023811986",
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.swipechain.org:8443/api/loader/status/sync \
  -H "API-Version: 1"
```
</request-example>
