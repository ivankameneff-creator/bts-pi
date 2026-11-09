import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Map, Marker, Popup, NavigationControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { 
  Globe, 
  RotateCw, 
  Layers, 
  Compass, 
  Sparkles, 
  Check, 
  Maximize2, 
  MapPin, 
  Navigation,
  Flame,
  GraduationCap,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { ACADEMIES } from '../data/schoolsData';

// Styles cartographiques 3D 100% gratuits et sans clé API
const GLOBE_STYLES = {
  satellite: {
    id: 'satellite',
    name: 'Satellite Google Earth',
    badge: 'Photo HD Esri',
    style: {
      version: 8,
      sources: {
        'esri-satellite': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256,
          attribution: '&copy; Esri, Maxar, Earthstar Geographics'
        },
        'esri-places': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256
        }
      },
      layers: [
        {
          id: 'satellite-layer',
          type: 'raster',
          source: 'esri-satellite',
          minzoom: 0,
          maxzoom: 20
        },
        {
          id: 'places-layer',
          type: 'raster',
          source: 'esri-places',
          minzoom: 0,
          maxzoom: 20,
          paint: {
            'raster-opacity': 0.8
          }
        }
      ],
      sky: {
        'sky-color': '#020617',
        'horizon-color': '#0f172a',
        'fog-color': '#020617'
      }
    }
  },
  dark: {
    id: 'dark',
    name: 'Dark Night Espace',
    badge: 'Électrique & Cyber',
    style: {
      version: 8,
      sources: {
        'carto-dark': {
          type: 'raster',
          tiles: [
            'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          ],
          tileSize: 256,
          attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
        }
      },
      layers: [
        {
          id: 'dark-layer',
          type: 'raster',
          source: 'carto-dark',
          minzoom: 0,
          maxzoom: 20
        }
      ],
      sky: {
        'sky-color': '#030712',
        'horizon-color': '#111827',
        'fog-color': '#030712'
      }
    }
  },
  topo: {
    id: 'topo',
    name: 'Relief & Villes',
    badge: 'Topographique',
    style: {
      version: 8,
      sources: {
        'esri-topo': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256,
          attribution: '&copy; Esri & OpenStreetMap'
        }
      },
      layers: [
        {
          id: 'topo-layer',
          type: 'raster',
          source: 'esri-topo',
          minzoom: 0,
          maxzoom: 20
        }
      ],
      sky: {
        'sky-color': '#020617',
        'horizon-color': '#1e293b',
        'fog-color': '#0f172a'
      }
    }
  }
};

export function Globe3DMap({ 
  schools, 
  onSelectSchool, 
  onSelectAcademy, 
  selectedAcademy 
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const rotationAnimRef = useRef(null);
  const userInteractingRef = useRef(false);

  const [activeStyleId, setActiveStyleId] = useState('satellite');
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredSchool, setHoveredSchool] = useState(null);
  const [isLayerMenuOpen, setIsLayerMenuOpen] = useState(false);

  // Initialize MapLibre in 3D Globe Projection
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const initialStyle = GLOBE_STYLES['satellite'].style;

    const map = new Map({
      container: containerRef.current,
      style: initialStyle,
      center: [2.3522, 46.603354], // Center on France [lng, lat]
      zoom: 2.3,
      pitch: 35, // Incline camera for 3D Earth horizon
      bearing: 0,
      projection: { type: 'globe' }, // True 3D spherical Globe
      attributionControl: false,
      maxPitch: 85
    });

    // Add navigation controls (zoom, compass, pitch tilt)
    map.addControl(new NavigationControl({ visualizePitch: true }), 'bottom-right');

    map.on('load', () => {
      // Invalidate container size for perfect rendering
      map.resize();
    });

    // Pause rotation when user interacts
    const handleInteractionStart = () => {
      userInteractingRef.current = true;
    };
    const handleInteractionEnd = () => {
      userInteractingRef.current = false;
    };

    map.on('mousedown', handleInteractionStart);
    map.on('touchstart', handleInteractionStart);
    map.on('mouseup', handleInteractionEnd);
    map.on('touchend', handleInteractionEnd);
    map.on('dragstart', handleInteractionStart);
    map.on('dragend', handleInteractionEnd);
    map.on('zoomstart', handleInteractionStart);
    map.on('zoomend', handleInteractionEnd);

    mapRef.current = map;

    return () => {
      if (rotationAnimRef.current) {
        cancelAnimationFrame(rotationAnimRef.current);
      }
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Auto-rotation loop
  useEffect(() => {
    if (!autoRotate) {
      if (rotationAnimRef.current) {
        cancelAnimationFrame(rotationAnimRef.current);
        rotationAnimRef.current = null;
      }
      return;
    }

    let lastTime = performance.now();

    const rotateGlobe = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (mapRef.current && !userInteractingRef.current) {
        const currentZoom = mapRef.current.getZoom();
        // Rotate smoothly only when zoomed out (space / continental view)
        if (currentZoom < 6) {
          const center = mapRef.current.getCenter();
          // Speed: ~0.5 degrees per second
          const speed = (delta / 1000) * 0.7;
          center.lng = (center.lng + speed) % 360;
          mapRef.current.setCenter(center);
        }
      }
      rotationAnimRef.current = requestAnimationFrame(rotateGlobe);
    };

    rotationAnimRef.current = requestAnimationFrame(rotateGlobe);

    return () => {
      if (rotationAnimRef.current) {
        cancelAnimationFrame(rotationAnimRef.current);
        rotationAnimRef.current = null;
      }
    };
  }, [autoRotate]);

  // Handle Style switch
  const handleSwitchStyle = (styleId) => {
    setActiveStyleId(styleId);
    if (!mapRef.current) return;
    const selected = GLOBE_STYLES[styleId];
    if (selected) {
      mapRef.current.setStyle(selected.style);
    }
    setIsLayerMenuOpen(false);
  };

  // Add / Update 3D Markers
  const updateMarkers = useCallback(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    // Remove previous markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    schools.forEach(school => {
      if (!school.coordinates || school.coordinates.length < 2) return;
      const lat = school.coordinates[0];
      const lng = school.coordinates[1];
      const isPublic = school.type.toLowerCase().includes('public');
      const isTopDemand = school.parcoursup?.demandes > 1000;

      // Custom 3D Marker Element
      const el = document.createElement('div');
      el.className = 'group relative cursor-pointer select-none';
      el.style.width = '32px';
      el.style.height = '32px';

      // Inner glowing marker pin
      el.innerHTML = `
        <div class="relative flex items-center justify-center w-full h-full">
          <!-- Outer Pulsing Halo -->
          <div class="absolute -inset-1 rounded-full animate-ping opacity-75 ${
            isTopDemand 
              ? 'bg-amber-400/40' 
              : isPublic 
                ? 'bg-emerald-400/40' 
                : 'bg-indigo-400/40'
          }"></div>

          <!-- Main Marker Badge -->
          <div class="relative w-8 h-8 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 transform group-hover:scale-130 group-hover:-translate-y-1 ${
            isTopDemand
              ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 ring-2 ring-amber-200'
              : isPublic
                ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-slate-950 ring-2 ring-emerald-200'
                : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white ring-2 ring-indigo-200'
          }">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
            </svg>
          </div>

          <!-- City Tag underneath -->
          <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded-md text-[9px] font-black tracking-wider uppercase bg-slate-950/95 text-slate-200 border border-slate-700 pointer-events-none shadow-xl opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
            ${school.ville}
          </div>
        </div>
      `;

      // Popup content with rich info
      const popupHtml = `
        <div class="p-1 max-w-[300px] text-slate-100 font-sans select-text">
          <div class="rounded-xl overflow-hidden relative shadow-lg mb-2.5 h-32 bg-slate-900 border border-slate-700/60">
            <img src="${school.image}" alt="${school.nom}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-slate-950 shadow-md ${
              isPublic ? 'bg-emerald-400' : 'bg-indigo-300'
            }">
              ${school.type}
            </span>
            <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/90 text-emerald-400 text-[11px] font-black border border-emerald-500/30">
              ${school.tauxReussite}% Réussite
            </span>
          </div>

          <h4 class="font-black text-sm text-white font-heading leading-snug line-clamp-2">${school.nom}</h4>
          
          <p class="text-xs text-slate-400 mt-1 flex items-center gap-1 font-medium">
            <span>📍 ${school.ville} (${school.codePostal})</span>
            <span class="text-slate-600">•</span>
            <span class="text-slate-300">Acad. de ${school.academie}</span>
          </p>

          <div class="mt-2.5 grid grid-cols-2 gap-1.5 text-[11px] font-bold">
            <div class="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span class="text-slate-400 font-normal">Avis :</span>
              <span class="text-amber-300">★ ${school.avis.note} <span class="text-[9px] font-normal text-slate-500">(${school.avis.totalAvis})</span></span>
            </div>
            
            <div class="bg-slate-900/90 p-1.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span class="text-slate-400 font-normal">Sélectivité :</span>
              <span class="text-cyan-300">${school.parcoursup?.tauxAcces ? `${school.parcoursup.tauxAcces}%` : 'Dossier'}</span>
            </div>
          </div>

          ${school.parcoursup?.surParcoursup ? `
            <div class="mt-2 bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-2 text-[10px] text-cyan-200 flex items-center justify-between">
              <span class="font-bold">📊 Parcoursup Open Data :</span>
              <span class="font-black text-amber-300">${school.parcoursup.voeuxPremierePlace ?? 0} en 1er choix</span>
            </div>
          ` : `
            <div class="mt-2 bg-slate-900 border border-slate-800 rounded-lg p-2 text-[10px] text-slate-400 flex items-center justify-between">
              <span>⚡ Recrutement direct</span>
              <span class="text-slate-300 font-semibold">Hors Parcoursup</span>
            </div>
          `}

          <div class="mt-3 pt-2 border-t border-slate-800 flex flex-col gap-1.5">
            <button id="globe-btn-school-${school.id}" class="w-full py-2 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20">
              <span>Fiche École Complète</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            
            <div class="grid grid-cols-2 gap-1.5">
              <button id="globe-btn-zoom-${school.id}" class="py-1.5 px-2 rounded-lg text-[10px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1 border border-slate-700">
                <span>🛰️ Plonger 3D</span>
              </button>
              <button id="globe-btn-acad-${school.id}" class="py-1.5 px-2 rounded-lg text-[10px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1 border border-slate-700">
                <span>Filtrer Académie</span>
              </button>
            </div>
          </div>
        </div>
      `;

      const popup = new Popup({
        offset: [0, -18],
        closeButton: true,
        closeOnClick: false,
        className: 'globe-custom-popup',
        maxWidth: '320px'
      }).setHTML(popupHtml);

      // Create Marker
      const marker = new Marker({
        element: el,
        anchor: 'center'
      })
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(map);

      // Attach event listeners when popup opens
      popup.on('open', () => {
        const btnSchool = document.getElementById(`globe-btn-school-${school.id}`);
        const btnZoom = document.getElementById(`globe-btn-zoom-${school.id}`);
        const btnAcad = document.getElementById(`globe-btn-acad-${school.id}`);

        if (btnSchool) {
          btnSchool.onclick = (e) => {
            e.stopPropagation();
            onSelectSchool(school);
          };
        }
        if (btnZoom) {
          btnZoom.onclick = (e) => {
            e.stopPropagation();
            // Cinematic 3D flyTo directly onto the school campus!
            map.flyTo({
              center: [lng, lat],
              zoom: 15.5,
              pitch: 65,
              bearing: -20,
              duration: 2500,
              essential: true
            });
          };
        }
        if (btnAcad) {
          btnAcad.onclick = (e) => {
            e.stopPropagation();
            onSelectAcademy(school.academie);
          };
        }
      });

      // Quick hover preview
      el.addEventListener('mouseenter', () => setHoveredSchool(school));
      el.addEventListener('mouseleave', () => setHoveredSchool(null));

      markersRef.current.push(marker);
    });
  }, [schools, onSelectSchool, onSelectAcademy]);

  // Update markers when schools change or style reloads
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    if (map.isStyleLoaded()) {
      updateMarkers();
    } else {
      map.once('style.load', () => {
        updateMarkers();
      });
    }
  }, [updateMarkers, activeStyleId]);

  // Handle flyTo when an academy is selected
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const acad = ACADEMIES.find(a => a.id === selectedAcademy);
    
    if (acad) {
      // Smooth orbital camera flyTo
      const targetLng = acad.coords[1];
      const targetLat = acad.coords[0];
      const targetZoom = acad.id === 'all' ? 2.5 : Math.max(acad.zoom - 1.5, 6);
      const targetPitch = acad.id === 'all' ? 30 : 50;

      map.flyTo({
        center: [targetLng, targetLat],
        zoom: targetZoom,
        pitch: targetPitch,
        bearing: acad.id === 'all' ? 0 : -15,
        duration: 2200,
        essential: true
      });
    }
  }, [selectedAcademy]);

  // Pre-set views
  const flyToPreset = (preset) => {
    if (!mapRef.current) return;
    if (preset === 'space') {
      mapRef.current.flyTo({
        center: [2.35, 46.6],
        zoom: 2.1,
        pitch: 25,
        bearing: 0,
        duration: 2200
      });
    } else if (preset === 'france') {
      mapRef.current.flyTo({
        center: [2.35, 46.6],
        zoom: 5.5,
        pitch: 42,
        bearing: -10,
        duration: 2000
      });
    } else if (preset === 'sudouest') {
      mapRef.current.flyTo({
        center: [0.85, 43.95],
        zoom: 7.2,
        pitch: 52,
        bearing: -15,
        duration: 2200
      });
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-slate-800/90 shadow-2xl bg-[#020617] ring-1 ring-white/10 flex flex-col">
      
      {/* 3D WebGL Globe Canvas */}
      <div 
        ref={containerRef} 
        className="w-full h-[580px] sm:h-[640px] z-10"
        style={{ minHeight: '580px' }}
      />

      {/* Atmospheric Star Background & Radial Shadow overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-radial from-transparent via-[#020617]/20 to-[#020617]" />

      {/* Top Left: Status & Quick Fly buttons */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-auto">
        <div className="flex items-center gap-2 bg-[#060a12]/90 backdrop-blur-xl px-3.5 py-2 rounded-2xl border border-slate-800/90 shadow-2xl">
          <Globe className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '16s' }} />
          <span className="text-xs font-bold text-white tracking-wide font-heading">Globe 3D Google Earth</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[10px] text-emerald-300 font-semibold bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">
            102 écoles
          </span>
        </div>

        {/* Orbit Flight Shortcuts */}
        <div className="hidden sm:flex items-center gap-1.5 bg-[#060a12]/85 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-800/80 shadow-xl text-xs">
          <button 
            onClick={() => flyToPreset('space')}
            className="px-2.5 py-1.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-1"
            title="Reculer la caméra en orbite spatiale"
          >
            <span>🌌 Espace</span>
          </button>
          <button 
            onClick={() => flyToPreset('france')}
            className="px-2.5 py-1.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-1"
            title="Centrer la caméra sur la France entière"
          >
            <span>🇫🇷 France</span>
          </button>
          <button 
            onClick={() => flyToPreset('sudouest')}
            className="px-2.5 py-1.5 rounded-xl hover:bg-slate-800 text-emerald-300 hover:text-emerald-200 font-bold transition-colors flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20"
            title="Plonger sur le Grand Sud-Ouest"
          >
            <span>🌊 Sud-Ouest</span>
          </button>
        </div>
      </div>

      {/* Top Right: Layer Switcher & Auto-Rotation Toggle */}
      <div className="absolute top-4 right-4 z-20 flex items-start gap-2 pointer-events-auto">
        {/* Toggle Auto-Rotation */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-bold backdrop-blur-xl border shadow-xl transition-all ${
            autoRotate 
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
              : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
          }`}
          title={autoRotate ? "Désactiver la rotation automatique" : "Activer la rotation automatique du globe"}
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
          <span className="hidden sm:inline">Rotation {autoRotate ? 'ON' : 'OFF'}</span>
        </button>

        {/* Style Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsLayerMenuOpen(!isLayerMenuOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-bold bg-[#060a12]/90 backdrop-blur-xl text-white border border-slate-800 shadow-xl hover:border-slate-700 transition-all"
            title="Changer le style du globe 3D"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">{GLOBE_STYLES[activeStyleId]?.name}</span>
          </button>

          {isLayerMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#080d1a]/95 backdrop-blur-2xl p-2 rounded-2xl border border-slate-800 shadow-2xl text-xs space-y-1 z-30">
              <p className="px-2.5 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Texture du Globe 3D
              </p>
              {Object.values(GLOBE_STYLES).map(item => {
                const isActive = activeStyleId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSwitchStyle(item.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                      isActive 
                        ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800 border border-transparent'
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-xs">{item.name}</p>
                      <p className="text-[10px] text-slate-500">{item.badge}</p>
                    </div>
                    {isActive && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Center / Left: Hovered School Preview Card */}
      {hoveredSchool && (
        <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden md:flex items-center gap-3 bg-[#060a12]/90 backdrop-blur-xl p-2.5 rounded-2xl border border-slate-800 shadow-2xl max-w-sm animate-fade-in">
          <img 
            src={hoveredSchool.image} 
            alt={hoveredSchool.nom} 
            className="w-12 h-12 rounded-xl object-cover border border-slate-700 shrink-0" 
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate font-heading">{hoveredSchool.nom}</p>
            <p className="text-[11px] text-emerald-400 flex items-center gap-1">
              📍 {hoveredSchool.ville} • {hoveredSchool.tauxReussite}% Réussite
            </p>
            {hoveredSchool.parcoursup?.voeuxPremierePlace != null && (
              <p className="text-[10px] text-amber-300 font-semibold truncate">
                ★ {hoveredSchool.parcoursup.voeuxPremierePlace} admis dès le 1er jour (J1)
              </p>
            )}
          </div>
        </div>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-slate-800/80 text-[11px] text-slate-400 shadow-lg">
        <Sparkles className="w-3 h-3 text-emerald-400" />
        <span>Clic gauche : Rotation 3D • Molette : Zoom immersif • Clic droit / Ctrl : Inclinaison (Pitch)</span>
      </div>

    </div>
  );
}
