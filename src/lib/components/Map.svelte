<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let map;
	let mapElement;
	let L;
	let markerLayers;
	let darkLayer, lightLayer;

	onMount(() => {
		if (browser) {
			startMap();
		}
	});

	function startMap() {
		if (browser) {
			L = window.L;
			map = L.map(mapElement).setView([9.5778278, 99.9514725], 20);

			darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
				attribution: '© OpenStreetMap contributors, © CartoDB'
			});

			lightLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			});

			lightLayer.addTo(map); // Светлая тема по умолчанию
			const changeLayerButton = L.control({ position: 'topright' });
			changeLayerButton.onAdd = function (map) {
				const div = L.DomUtil.create('div', 'change-layer-button');
				div.innerHTML = '<button class="bg-orange-600 rounded-full p-3">Change color</button>';
				div.onclick = function () {
					if (map.hasLayer(lightLayer)) {
						map.removeLayer(lightLayer);
						darkLayer.addTo(map);
					} else {
						map.removeLayer(darkLayer);
						lightLayer.addTo(map);
					}
				};
				return div;
			};

			changeLayerButton.addTo(map);

			markerLayers = L.layerGroup().addTo(map);
			const customIcon = L.icon({
				iconUrl: '/assets/logo.svg',
				iconSize: [50, 50],
				iconAnchor: [19, 38],
				popupAnchor: [0, -38]
			});
			L.marker([9.5778278, 99.9514725], { icon: customIcon })
				.addTo(map)
				.bindPopup('Fireplace Life Factory: 135 Had Lamai Rd, Ko Samui');
		}
	}

	function resizeMap() {
		map?.invalidateSize();
	}

	onDestroy(() => {
		if (browser && map) {
			map.remove();
		}
	});
</script>

<svelte:window on:resize={resizeMap} />

<div class="map w-full shadow-md" bind:this={mapElement}></div>

<svelte:head>
	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" on:load={startMap}></script>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		crossorigin=""
	/>
</svelte:head>

<style>
	.map {
		height: 600px;
	}
</style>
