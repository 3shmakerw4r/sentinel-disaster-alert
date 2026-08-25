# Sentinel Disaster Alert System

Sentinel is an open-source community hazard dashboard that brings official alerts, weather conditions, sensor readings, and practical safety guidance into one clear interface.

> **Status:** Early public prototype. Live NWS and USGS data is informational and must not replace instructions from emergency authorities.

## Planned data sources

- NOAA / National Weather Service alerts — connected
- USGS earthquake feeds — connected
- NASA FIRMS wildfire data
- Optional ESP32 or Raspberry Pi sensor stations

## Run locally

```bash
npm install
npm run dev
```

## Roadmap

1. Responsive dashboard and location selection
2. Live USGS and NWS integrations
3. Interactive hazard map
4. Configurable risk scoring
5. Sensor ingestion API
6. Offline-capable progressive web app

## Contributing

Issues and pull requests are welcome. Do not commit API keys, personal information, or unverified emergency claims.

## License

Released under the [MIT License](LICENSE).
