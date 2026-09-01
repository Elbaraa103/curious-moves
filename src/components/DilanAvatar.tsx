import React, { useState, useEffect } from 'react';
import { DILAN_PORTRAIT_DATA_URI } from '../data/dilanProfilePhoto';
import { Camera } from 'lucide-react';
import { Language } from '../types';
import { EditProfilePhotoModal } from './EditProfilePhotoModal';

interface DilanAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  altText?: string;
  editable?: boolean;
  currentLang?: Language;
}

export const DilanAvatar: React.FC<DilanAvatarProps> = ({
  size = 'lg',
  className = '',
  altText = 'Dilan Akbayir • Curious Moves Berlin',
  editable = false,
  currentLang = 'tr',
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>(() => {
    try {
      const stored = localStorage.getItem('curiousmoves_profile_avatar');
      if (stored) return stored;
    } catch {
      // ignore
    }
    return DILAN_PORTRAIT_DATA_URI;
  });

  const [imgError, setImgError] = useState<boolean>(false);

  // Sync with localStorage & custom event listener
  useEffect(() => {
    const syncAvatar = () => {
      try {
        const stored = localStorage.getItem('curiousmoves_profile_avatar');
        if (stored) {
          setImgSrc(stored);
          setImgError(false);
          return;
        }
      } catch {
        // ignore
      }
      setImgSrc(DILAN_PORTRAIT_DATA_URI);
      setImgError(false);
    };

    syncAvatar();
    window.addEventListener('curiousmoves_avatar_updated', syncAvatar);
    return () => {
      window.removeEventListener('curiousmoves_avatar_updated', syncAvatar);
    };
  }, []);

  const sizeClasses = {
    sm: 'w-12 h-12 border-2',
    md: 'w-20 h-20 border-3',
    lg: 'w-28 h-28 sm:w-32 sm:h-32 border-4',
    xl: 'w-36 h-36 sm:w-44 sm:h-44 border-4',
  }[size];

  const editButtonSize = {
    sm: 'p-1 bottom-0 right-0',
    md: 'p-1.5 bottom-0 right-0',
    lg: 'p-2 bottom-1 right-1',
    xl: 'p-2.5 bottom-1.5 right-1.5',
  }[size];

  return (
    <>
      <div className={`relative inline-block shrink-0 ${className}`}>
        {/* Circular Avatar Frame */}
        <div
          onClick={editable ? () => setIsEditModalOpen(true) : undefined}
          className={`relative rounded-full overflow-hidden ${sizeClasses} border-amber-300/90 shadow-lg ring-4 ring-amber-500/20 bg-gradient-to-br from-amber-100 to-amber-200 ${
            editable ? 'cursor-pointer group hover:ring-amber-500/40 hover:scale-102 transition-all duration-200' : ''
          }`}
          title={editable ? (currentLang === 'tr' ? 'Fotoğrafı Düzenle' : 'Edit Photo') : altText}
        >
          {!imgError && imgSrc ? (
            <img
              src={imgSrc}
              alt={altText}
              referrerPolicy="no-referrer"
              onError={() => {
                // Fallback to default portrait if custom image fails
                if (imgSrc !== DILAN_PORTRAIT_DATA_URI) {
                  setImgSrc(DILAN_PORTRAIT_DATA_URI);
                } else {
                  setImgError(true);
                }
              }}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Personalized Monogram Profile Fallback */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-amber-950 p-2 select-none">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-xs">
                DA
              </span>
              <span className="text-[9px] font-extrabold text-amber-950 uppercase tracking-wider">
                Dilan Akbayir
              </span>
            </div>
          )}

          {/* Hover Overlay for Editable Avatars */}
          {editable && (
            <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-6 h-6 text-white drop-shadow-md" />
            </div>
          )}
        </div>

        {/* Quick Edit Floating Camera Button */}
        {editable && (
          <button
            onClick={() => setIsEditModalOpen(true)}
            type="button"
            className={`absolute ${editButtonSize} rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-md border-2 border-white hover:scale-110 transition-all cursor-pointer z-10`}
            title={currentLang === 'tr' ? 'Fotoğrafı Değiştir' : 'Change Photo'}
            aria-label="Change photo"
          >
            <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        )}
      </div>

      {/* Edit Profile Photo Modal */}
      {editable && (
        <EditProfilePhotoModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          currentLang={currentLang}
        />
      )}
    </>
  );
};
