// https://github.com/naomigrace/nextjs-with-mapbox-gl-js/blob/master/pages/index.js

import Head from "next/head"
import { useEffect, useState } from "react"
import Nav from "../components/Nav"
// import { addDataLayer } from "../map/addDataLayer"
import { initializeMap } from "../lib/map/initializeMap"
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js")

const MapComponent = () => {

  const [Map, setMap] = useState()
  const [pageIsMounted, setPageIsMounted] = useState(false)

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  useEffect(() => {
    setPageIsMounted(true)

    let map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-v9",
      // style: "mapbox://styles/mapbox/dark-v10",
      // style: "mapbox://styles/mapbox/streets-v11",
      center: [-77.02, 38.887],
      zoom: 10,
      pitch: 45,
      center: [-86.9, 20.4],
    })

    initializeMap(mapboxgl, map)
    setMap(map)
  }, [])

  // useEffect(() => {
  //   if (pageIsMounted && data) {
  //     Map.on("load", function () {
  //       addDataLayer(Map, data)
  //     })
  //   }
  // }, [pageIsMounted, setMap, data, Map])

  return (
    <>
      <Head>
        <title>Contact | Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="min-w-max h-screen">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <div id="map" className="h-full w-full" />

      </main>
    </>
  )

}

export default MapComponent
