'use client';

import { useState } from 'react';

import { type PropertyDocument } from '@/types/properties/document/property-document';
import { X } from 'lucide-react';

interface GalleryModalProps {
  floorPlants: PropertyDocument[];
  photos: PropertyDocument[];
  videos: PropertyDocument[];
}

export default function GalleryModal({
  floorPlants,
  photos,
  videos,
}: GalleryModalProps): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDocuments, setModalDocuments] = useState<PropertyDocument[]>([]);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (docs: PropertyDocument[], title: string): void => {
    setModalDocuments(docs);
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setModalDocuments([]);
    setModalTitle('');
  };

  const openImageInNewTab = (doc: PropertyDocument): void => {
    window.open(doc.url, '_blank');
  };

  return (
    <>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Galeria de Mídias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {floorPlants.length > 0 && (
            <button
              onClick={() => {
                openModal(floorPlants, 'Plantas Humanizadas');
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-6 rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                📐
              </div>
              <div className="text-lg font-bold mb-2">Plantas Humanizadas</div>
              <div className="text-sm text-gray-300">
                {floorPlants.length} plantas disponíveis
              </div>
            </button>
          )}

          {photos.length > 0 && (
            <button
              onClick={() => {
                openModal(photos, 'Galeria de Fotos');
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-6 rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                📸
              </div>
              <div className="text-lg font-bold mb-2">Galeria de Fotos</div>
              <div className="text-sm text-gray-300">
                {photos.length} fotos disponíveis
              </div>
            </button>
          )}

          {videos.length > 0 && (
            <button
              onClick={() => {
                openModal(videos, 'Vídeos');
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-6 rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                🎥
              </div>
              <div className="text-lg font-bold mb-2">Vídeos</div>
              <div className="text-sm text-gray-300">
                {videos.length} vídeos disponíveis
              </div>
            </button>
          )}
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 pt-32 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-7xl max-h-[calc(100vh-8rem)] flex flex-col overflow-hidden"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700 flex-shrink-0">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {modalTitle}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modalDocuments.map((doc) => (
                  <div
                    key={doc.documentUUID}
                    className="group cursor-pointer"
                    onClick={() => {
                      openImageInNewTab(doc);
                    }}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <img
                        className="w-full h-64 object-cover"
                        alt={doc.id.toString()}
                        src={doc.url}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                            Abrir em nova guia
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
