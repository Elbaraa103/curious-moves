import React, { useState, useRef, ChangeEvent } from 'react';
import { Language } from '../types';
import { X, Upload, RotateCcw, Check, Camera, Image as ImageIcon } from 'lucide-react';
import { DILAN_PORTRAIT_DATA_URI } from '../data/dilanProfilePhoto';

interface EditProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const EditProfilePhotoModal: React.FC<EditProfilePhotoModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSavedSuccess, setIsSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const labels = {
    title: {
      tr: 'Profil Fotoğrafını Düzenle',
      en: 'Edit Profile Photo',
      de: 'Profilfoto bearbeiten',
    }[currentLang],
    subtitle: {
      tr: 'Yeni bir fotoğraf yükleyin, ölçeklendirin ve kaydedin.',
      en: 'Upload a new photo, scale it, and save.',
      de: 'Laden Sie ein neues Foto hoch, skalieren Sie es und speichern Sie es.',
    }[currentLang],
    uploadBtn: {
      tr: 'Cihazdan Fotoğraf Seç',
      en: 'Select from Device',
      de: 'Vom Gerät auswählen',
    }[currentLang],
    dragDropText: {
      tr: 'veya fotoğrafı buraya sürükleyip bırakın (JPG, PNG, WebP)',
      en: 'or drag and drop photo here (JPG, PNG, WebP)',
      de: 'oder Foto hierher ziehen (JPG, PNG, WebP)',
    }[currentLang],
    zoomLabel: {
      tr: 'Fotoğrafı Ölçeklendir / Yakınlaştır',
      en: 'Scale / Zoom Photo',
      de: 'Foto skalieren / zoomen',
    }[currentLang],
    resetDefault: {
      tr: 'Orijinal Portreye Sıfırla',
      en: 'Reset to Original Portrait',
      de: 'Auf Originalporträt zurücksetzen',
    }[currentLang],
    saveBtn: {
      tr: 'Fotoğrafı Kaydet ve Uygula',
      en: 'Save & Apply Photo',
      de: 'Foto speichern & anwenden',
    }[currentLang],
    cancelBtn: {
      tr: 'İptal',
      en: 'Cancel',
      de: 'Abbrechen',
    }[currentLang],
    savedNotice: {
      tr: 'Profil fotoğrafı başarıyla güncellendi!',
      en: 'Profile photo updated successfully!',
      de: 'Profilfoto erfolgreich aktualisiert!',
    }[currentLang],
    errorTooLarge: {
      tr: 'Görsel boyutu çok büyük (Maksimum 8MB). Lütfen daha küçük bir dosya seçin.',
      en: 'Image size is too large (Max 8MB). Please choose a smaller file.',
      de: 'Bildgröße ist zu groß (Max 8MB). Bitte wählen Sie eine kleinere Datei.',
    }[currentLang],
  };

  const handleProcessFile = (file: File) => {
    setErrorMsg(null);
    setIsSavedSuccess(false);

    if (!file.type.startsWith('image/')) {
      setErrorMsg(
        currentLang === 'tr'
          ? 'Lütfen geçerli bir görsel dosyası seçin (JPG, PNG, WebP).'
          : 'Please select a valid image file (JPG, PNG, WebP).'
      );
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setErrorMsg(labels.errorTooLarge);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      // Compress slightly via canvas for optimal performance
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDimension = 900;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
          setPreviewSrc(compressedDataUrl);
          setZoom(1);
        } else {
          setPreviewSrc(result);
        }
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleSave = () => {
    if (previewSrc) {
      try {
        localStorage.setItem('curiousmoves_profile_avatar', previewSrc);
        window.dispatchEvent(new Event('curiousmoves_avatar_updated'));
        setIsSavedSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSavedSuccess(false);
        }, 600);
      } catch (err) {
        setErrorMsg(
          currentLang === 'tr'
            ? 'Fotoğraf kaydedilemedi. Lütfen daha küçük bir görsel deneyin.'
            : 'Could not save photo. Please try a smaller image.'
        );
      }
    }
  };

  const handleResetToDefault = () => {
    try {
      localStorage.removeItem('curiousmoves_profile_avatar');
      window.dispatchEvent(new Event('curiousmoves_avatar_updated'));
      setPreviewSrc(null);
      setZoom(1);
      setIsSavedSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSavedSuccess(false);
      }, 600);
    } catch {
      // ignore
    }
  };

  // Get current active avatar to show in preview if not selected yet
  const currentAvatar = previewSrc || localStorage.getItem('curiousmoves_profile_avatar') || DILAN_PORTRAIT_DATA_URI;

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-800">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">{labels.title}</h3>
              <p className="text-xs text-slate-500">{labels.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Circular Avatar Preview */}
        <div className="flex flex-col items-center justify-center gap-4 py-2">
          <div className="relative group">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl ring-4 ring-amber-500/20 bg-slate-100 flex items-center justify-center">
              <img
                src={currentAvatar}
                alt="Profile Preview"
                style={{ transform: `scale(${zoom})` }}
                className="w-full h-full object-cover transition-transform duration-100"
              />
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-1 right-1 p-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg border-2 border-white transition-transform hover:scale-105 cursor-pointer"
              title={labels.uploadBtn}
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Zoom Slider */}
          <div className="w-full max-w-xs space-y-1.5 pt-2">
            <div className="flex justify-between text-xs font-semibold text-slate-600">
              <span>{labels.zoomLabel}</span>
              <span>{Math.round(zoom * 100)}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="2.5"
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Drag & Drop Upload Dropzone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-colors ${
            isDragging
              ? 'border-amber-500 bg-amber-50/80'
              : 'border-slate-300 hover:border-amber-400 hover:bg-amber-50/30'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/jpg"
            onChange={handleFileInputChange}
            className="hidden"
          />
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-full bg-amber-100 text-amber-800">
              <Upload className="w-5 h-5" />
            </div>
            <p className="text-sm font-bold text-slate-800">{labels.uploadBtn}</p>
            <p className="text-xs text-slate-500">{labels.dragDropText}</p>
          </div>
        </div>

        {/* Error / Success Notifications */}
        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
            {errorMsg}
          </div>
        )}

        {isSavedSuccess && (
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 flex items-center gap-2 justify-center">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{labels.savedNotice}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={handleResetToDefault}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{labels.resetDefault}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              type="button"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold transition-colors cursor-pointer"
            >
              {labels.cancelBtn}
            </button>
            <button
              onClick={handleSave}
              disabled={!previewSrc}
              type="button"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-extrabold shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>{labels.saveBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
