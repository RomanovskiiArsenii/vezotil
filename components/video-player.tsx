'use client';

import { useState, useEffect } from 'react';
import { Play, X, ArrowLeft, Monitor, Activity, Zap, LogOut, Maximize } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoPlayerProps {
    embedId: string;
    title: string;
    author: string;
    position: string;
    clinic: string;
    platform?: string;
}

export function VideoPlayer({ embedId, title, author, position, clinic, platform = 'rutube' }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayingInWindow, setIsPlayingInWindow] = useState(false);
    const [showInfoCard, setShowInfoCard] = useState(true);

    const getEmbedUrl = (autostart: boolean = false) => {
        switch (platform) {
            case 'rutube':
                // return `https://www.youtube.com/embed/GgnClrx8N2k?si=lN9glqDZ3sRQnv11`;
                return `https://rutube.ru/play/embed/${embedId}/?autostart=${autostart ? 1 : 0}&muted=0&skinColor=rgb(56,189,248)&t=0s`;
            default:
                return `https://rutube.ru/play/embed/${embedId}/?autostart=${autostart ? 1 : 0}&skinColor=rgb(56,189,248)`;
        }
    };

    const handleGoBack = () => {
        setIsPlaying(false);
        window.history.back();
    };

    const handleExitToVideoPage = () => {
        setIsPlaying(false);
        setIsPlayingInWindow(false);
        window.location.href = '/video';
    };

    const handlePlayInWindow = () => {
        setIsPlayingInWindow(true);
    };

    const handleFullscreen = () => {
        setIsPlaying(true);
        setIsPlayingInWindow(false);
    };

    // Автоскрытие информационной плашки через 4 секунды
    useEffect(() => {
        if (isPlaying || isPlayingInWindow) {
            setShowInfoCard(true);
            const timer = setTimeout(() => {
                setShowInfoCard(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [isPlaying, isPlayingInWindow]);

    return (
        <>
            <div
                className={`relative aspect-[16/10] bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-lg border border-cyan-500/30 overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300 group ${!isPlayingInWindow ? 'cursor-pointer' : ''}`}
                onClick={!isPlayingInWindow ? handlePlayInWindow : undefined}
            >
                {/* Medical HUD Elements - should not block clicks */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-20 pointer-events-none">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-xs text-green-400 font-mono">REC</div>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-2 z-20 pointer-events-none">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <div className="text-xs text-cyan-400 font-mono">LIVE</div>
                </div>

                {/* Corner scan lines - should not block clicks */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60 z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60 z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/60 z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60 z-20 pointer-events-none"></div>

                {/* Video content or play button */}
                {isPlayingInWindow ? (
                    <div className="absolute inset-0">
                        <iframe
                            src={getEmbedUrl(true)}
                            className="w-full h-full"
                            style={{
                                border: 'none',
                                outline: 'none',
                            }}
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            frameBorder="0"
                        />

                        {/* Fullscreen button overlay */}
                        <div className="absolute top-2 right-2 z-30">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleFullscreen();
                                }}
                                className="w-8 h-8 bg-black/80 hover:bg-cyan-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-cyan-200 transition-colors border border-cyan-500/50 cursor-pointer"
                                title="Полноэкранный режим"
                            >
                                <Maximize className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <motion.div
                            className="w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-colors border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30 cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Play className="w-10 h-10 text-cyan-400 ml-1 pointer-events-none" fill="currentColor" />
                        </motion.div>
                    </div>
                )}

                {/* Show overlays only when not playing in window */}
                {!isPlayingInWindow && (
                    <>
                        {/* Video title overlay - top center */}
                        <div className="absolute top-8 left-8 right-8 text-center z-20 pointer-events-none">
                            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-1 border border-cyan-500/20">
                                <div className="text-cyan-300 text-xs font-medium truncate">{title}</div>
                            </div>
                        </div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 group-hover:from-black/60 transition-all pointer-events-none" />

                        {/* Doctor info overlay - bottom bar full width */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                            <div className="bg-black/90 backdrop-blur-sm border-t border-cyan-500/50 p-1.5">
                                <h4 className="text-white font-semibold text-xs leading-tight">{author}</h4>
                                <p className="text-gray-300 text-[10px] leading-tight">{position}</p>
                                <p className="text-cyan-400 text-[10px] leading-tight">{clinic}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Full screen video modal */}
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setIsPlaying(false)}
                    >
                        {/* Medical HUD Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black">
                            {/* Grid pattern */}
                            <div
                                className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: `
                  linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
                `,
                                    backgroundSize: '20px 20px',
                                }}
                            ></div>
                        </div>

                        {/* HUD Elements */}
                        <div className="absolute top-4 left-4 flex items-center gap-4 text-cyan-400 z-10">
                            <div className="flex items-center gap-2">
                                <Monitor className="w-5 h-5" />
                                <span className="text-sm font-mono">MEDICAL VIEWER v2.1</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-mono">RECORDING</span>
                            </div>
                        </div>

                        <div className="absolute top-4 right-4 flex items-center gap-4 text-cyan-400 z-10">
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                <span className="text-sm font-mono">HD QUALITY</span>
                            </div>
                        </div>

                        <div className="custom-overflow-visible relative w-full max-w-7xl space-y-4">
                            <div className="custom-overflow-visible flex items-center gap-6">
                                {/* Exit button - left side */}
                                <motion.button
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    onClick={handleExitToVideoPage}
                                    className="flex-shrink-0 group flex flex-col items-center gap-3 p-4 bg-slate-800/90 hover:bg-slate-700/90 backdrop-blur-sm rounded-xl border border-cyan-500/50 text-white hover:text-cyan-400 transition-all duration-300 shadow-lg"
                                    title="Выход из режима воспроизведения"
                                >
                                    <LogOut className="w-8 h-8" />
                                    <div className="text-center">
                                        <div className="text-sm font-medium">Выход из</div>
                                        <div className="text-xs">режима воспроизведения</div>
                                    </div>
                                </motion.button>

                                {/* Video container */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="relative flex-1 bg-black rounded-lg overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
                                    style={{
                                        aspectRatio: '16/9',
                                        maxHeight: '80vh',
                                        width: '100%',
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Close button - top right */}
                                    <div className="absolute top-4 right-4 z-30">
                                        <button
                                            onClick={() => setIsPlaying(false)}
                                            className="w-10 h-10 bg-slate-800/90 hover:bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-red-400 transition-colors border border-cyan-500/50"
                                            title="Закрыть видео"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Corner HUD elements */}
                                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/80 z-20"></div>
                                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/80 z-20"></div>
                                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/80 z-20"></div>
                                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/80 z-20"></div>

                                    {/* Video iframe */}
                                    <iframe
                                        src={getEmbedUrl(true)}
                                        className="w-full h-full"
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                        }}
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                        frameBorder="0"
                                    />

                                    {/* Auto-hiding info overlay - top left, temporarily visible */}
                                    <AnimatePresence>
                                        {showInfoCard && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                className="absolute top-4 left-4 max-w-sm bg-black/95 backdrop-blur-sm rounded-lg p-1.5 border border-cyan-500/60 z-25 shadow-xl shadow-black/70"
                                            >
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                                                    <span className="text-green-400 text-[10px] font-mono">
                                                        INFORMATION
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-semibold text-xs mb-0.5 leading-tight">
                                                    {title}
                                                </h3>
                                                <p className="text-cyan-400 text-[10px] font-medium">{author}</p>
                                                <p className="text-gray-300 text-[10px] leading-tight">{clinic}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>

                            {/* Permanent info bar under video */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/50 shadow-lg ml-24"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <p className="text-cyan-400 text-sm font-medium">{author}</p>
                                                <p className="text-gray-300 text-sm">{position}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-cyan-300 text-sm">{clinic}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 ml-6">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-green-400 text-sm font-mono">PROFESSIONAL</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
