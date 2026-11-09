import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import { ACADEMIES } from '../data/schoolsData';
import { 
  MapPin, 
  ArrowRight, 
  Star, 
  Award, 
  GraduationCap, 
  Building, 
  Layers, 
  Check, 
  Sparkles,
  Globe,
  Map as MapIcon
} from 'lucide-react';
import { Globe3DMap } from './Globe3DMap';

// Tile providers that are 100% free and require NO API key
const TILE_PROVIDERS = {
  osmfr: {
    id: 'osmfr',
    name: 'OpenStreetMap France',
    badge: 'Optimisé France',
    url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    options: {
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abc',
      maxZoom: 20
    }
  },
  osm: {
    id: 'osm',
    name: 'OpenStreetMap Standard',
    badge: 'Mondial OSM',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }
  },
  esri: {
    id: 'esri',
    name: 'Esri World Street',
    badge: 'Rues & Relief',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    options: {
      attribution: 'Tiles &copy; Esri &mdash; OpenStreetMap contributors',
      maxZoom: 19
    }
  }
};

export function InteractiveMap({ 
  schools, 
  onSelectSchool, 
  onSelectAcademy, 
  selectedAcademy 
}) {
  const [displayMode, setDisplayMode] = useState('globe'); // 'globe' (default Google Earth) or '2d'
  
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const tileLayerRef = useRef(null);
  const markersRef = useRef([]);
  const [activeTileId, setActiveTileId] = useState('osmfr');

  // Initialize 2D Leaflet Map when in '2d' mode
  useEffect(() => {
    if (displayMode !== '2d') return;
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [46.603354, 2.3],
        zoom: 6,
        minZoom: 5,
        maxZoom: 19,
        scrollWheelZoom: true,
      });

      const initialProvider = TILE_PROVIDERS['osmfr'];
      const tileLayer = L.tileLayer(initialProvider.url, initialProvider.options).addTo(map);
      tileLayerRef.current = tileLayer;
      mapInstanceRef.current = map;

      setTimeout(() => {
        map.invalidateSize();
      }, 250);
    } else {
      setTimeout(() => {
        mapInstanceRef.current?.invalidateSize();
      }, 100);
    }
  }, [displayMode]);

  // Cleanup Leaflet on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        tileLayerRef.current = null;
      }
    };
  }, []);

  // Switch Tile Provider in 2D mode
  useEffect(() => {
    if (displayMode !== '2d' || !mapInstanceRef.current) return;
    const provider = TILE_PROVIDERS[activeTileId];
    if (!provider) return;

    if (tileLayerRef.current) {
      tileLayerRef.current.remove();
    }
    const newLayer = L.tileLayer(provider.url, provider.options).addTo(mapInstanceRef.current);
    newLayer.bringToBack();
    tileLayerRef.current = newLayer;
  }, [activeTileId, displayMode]);

  // Update Markers for 2D Leaflet map
  useEffect(() => {
    if (displayMode !== '2d' || !mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    // Clear old markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add school markers
    schools.forEach(school => {
      const isPublic = school.type.toLowerCase().includes('public');
      
      const customHtml = `
        <div class="group relative flex items-center justify-center cursor-pointer">
          <div class="w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 transform hover:scale-125 ${
            isPublic 
              ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-300 ring-offset-2 ring-offset-slate-900 font-bold' 
              : 'bg-indigo-600 text-white ring-2 ring-indigo-300 ring-offset-2 ring-offset-slate-900'
          }">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#060a12]/95 text-slate-200 border border-slate-700 pointer-events-none shadow-xl">
            ${school.ville}
          </span>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: customHtml,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -20],
      });

      const marker = L.marker(school.coordinates, { icon: customIcon }).addTo(map);

      const popupContent = document.createElement('div');
      popupContent.className = 'p-1 max-w-[290px] text-slate-100 font-sans';
      popupContent.innerHTML = `
        <div class="rounded-xl overflow-hidden relative shadow-inner mb-2.5 h-32 bg-slate-900 border border-slate-700/60">
          <img src="${school.image}" alt="${school.nom}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow ${
            isPublic ? 'bg-emerald-600' : 'bg-indigo-600'
          }">
            ${school.type}
          </span>
          <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/90 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
            ${school.tauxReussite}% Réussite
          </span>
        </div>
        <h4 class="font-bold text-sm text-white font-heading leading-snug line-clamp-2">${school.nom}</h4>
        <p class="text-xs text-slate-400 mt-1 flex items-center gap-1">
          📍 ${school.ville} • Académie de ${school.academie}
        </p>
        <div class="mt-2.5 flex items-center justify-between text-xs font-semibold">
          <span class="text-amber-400 flex items-center gap-0.5">
            ★ ${school.avis.note} <span class="text-slate-400 font-normal">(${school.avis.totalAvis})</span>
          </span>
          ${school.parcoursup?.surParcoursup ? `
            <span class="text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-full font-bold text-[10px]">
              📊 ${school.parcoursup.demandes.toLocaleString()} vœux (${school.parcoursup.voeuxPremierePlace ?? 0} en 1er choix)
            </span>
          ` : `
            <span class="text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full text-[10px]">
              ⚡ Admission directe
            </span>
          `}
        </div>
        ${school.datePortesOuvertes ? `
          <div class="mt-2 bg-amber-500/10 border border-amber-500/30 rounded-lg p-1.5 text-[10px] text-amber-200 flex items-center justify-between gap-1">
            <span class="truncate">📅 <strong>JPO :</strong> ${school.datePortesOuvertes}</span>
            ${school.sourceJpoUrl ? `
              <a href="${school.sourceJpoUrl}" target="_blank" rel="noopener noreferrer" class="shrink-0 text-amber-300 hover:text-white underline font-bold" title="Vérifier la date sur la source officielle">
                Source ↗
              </a>
            ` : ''}
          </div>
        ` : ''}
        <div class="mt-3 pt-2.5 border-t border-slate-800 flex flex-col gap-1.5">
          <button id="view-school-${school.id}" class="w-full py-2 px-3 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors flex items-center justify-center gap-1 shadow-md">
            Voir la fiche détaillée &rarr;
          </button>
          <button id="view-acad-${school.id}" class="w-full py-1.5 px-2 rounded-xl text-[11px] font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700">
            Filtrer l'Académie ${school.academie}
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('popupopen', () => {
        const btnSchool = document.getElementById(`view-school-${school.id}`);
        const btnAcad = document.getElementById(`view-acad-${school.id}`);
        if (btnSchool) {
          btnSchool.onclick = () => onSelectSchool(school);
        }
        if (btnAcad) {
          btnAcad.onclick = () => onSelectAcademy(school.academie);
        }
      });

      markersRef.current.push(marker);
    });

  }, [schools, onSelectSchool, onSelectAcademy, displayMode]);

  // Handle flyTo when academy changes in 2D mode
  useEffect(() => {
    if (displayMode !== '2d' || !mapInstanceRef.current) return;
    const acad = ACADEMIES.find(a => a.id === selectedAcademy);
    if (acad) {
      mapInstanceRef.current.flyTo(acad.coords, acad.zoom, {
        duration: 1.2,
      });
    }
  }, [selectedAcademy, displayMode]);

  return (
    <div className="space-y-4">
      {/* Header with Title & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {displayMode === 'globe' ? <Globe className="w-5 h-5 text-emerald-400" /> : <MapPin className="w-5 h-5 text-emerald-400" />}
          </div>
          <div>
            <h3 className="font-bold text-lg text-white font-heading">
              {displayMode === 'globe' ? 'Globe 3D Google Earth' : 'Carte Interactive 2D'}
            </h3>
            <p className="text-xs text-slate-400">
              {schools.length} écoles répertoriées en France
            </p>
          </div>
        </div>

        {/* View Toggle: Globe 3D Google Earth vs Plan 2D */}
        <div className="flex items-center gap-1 bg-[#080d1a]/95 backdrop-blur-xl p-1 rounded-2xl border border-slate-800 shadow-xl self-start sm:self-auto">
          <button
            onClick={() => setDisplayMode('globe')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              displayMode === 'globe'
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Globe 3D Earth</span>
          </button>
          
          <button
            onClick={() => setDisplayMode('2d')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              displayMode === '2d'
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span>Plan 2D</span>
          </button>
        </div>
      </div>

      {/* Academies Scrollable Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {ACADEMIES.map(acad => {
          const isSelected = selectedAcademy === acad.id;
          return (
            <button
              key={acad.id}
              onClick={() => onSelectAcademy(acad.id)}
              className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                isSelected
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{acad.nom}</span>
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {acad.id === 'all' ? schools.length : schools.filter(s => s.academie === acad.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Map Content: Globe 3D or 2D Map */}
      {displayMode === 'globe' ? (
        <Globe3DMap 
          schools={schools}
          onSelectSchool={onSelectSchool}
          onSelectAcademy={onSelectAcademy}
          selectedAcademy={selectedAcademy}
        />
      ) : (
        <div className="relative rounded-3xl overflow-hidden border border-slate-800/90 shadow-2xl bg-slate-950 ring-1 ring-white/5">
          <div 
            ref={mapContainerRef} 
            className="w-full h-[540px] z-10"
            style={{ minHeight: '540px' }}
          />

          {/* Floating Controls Overlay (2D) */}
          <div className="absolute top-4 right-4 z-20 pointer-events-auto space-y-2">
            <div className="bg-[#080d1a]/95 backdrop-blur-xl p-3.5 rounded-2xl border border-slate-800 text-xs shadow-2xl space-y-2.5 max-w-[240px]">
              <div className="flex items-center justify-between font-bold text-white pb-2 border-b border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  Fond de carte 2D
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  100% Gratuit
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {Object.values(TILE_PROVIDERS).map(provider => {
                  const isActive = activeTileId === provider.id;
                  return (
                    <button
                      key={provider.id}
                      onClick={() => setActiveTileId(provider.id)}
                      className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-left transition-all ${
                        isActive
                          ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-semibold">{provider.name}</p>
                        <p className="text-[10px] text-slate-500 font-normal">{provider.badge}</p>
                      </div>
                      {isActive && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
