"use client";

import Image from "next/image";
import Link from "next/link";
import Fleche from "../composant/fleche";
import Breadcrumbs from "../composant/breadcrumbs";
import { useState, useRef, useEffect } from "react";

export default function QuiSommesNous() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const onMove = (e) => {
      setMousePos({ x: e.pageX, y: e.pageY });
    };
    const onEnter = () => setShowTooltip(true);
    const onLeave = () => setShowTooltip(false);

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const breadcrumbs = [
    { label: "Accueil", path: "/" },
    { label: "Nos objects culturels", path: "/nos-objects-culturels" },
    { label: "Objet ? : de multiples formes et thématiques variées", path: "/objet-multiple" },
    { label: "Deux enfants au destin différents", path: "/histoire-enfant" },
    { label: "Le choix de l'objet", path: "/choix-objet" },
  ];
  return (
    <>

    <Breadcrumbs items={breadcrumbs}/>
    <div className="w-full">
      {/* Image en arrière-plan */}
      <Image 
        src="/image/slie9.png" 
        alt="choixobjet" 
        width={1920} 
        height={1080} 
        className="w-full h-auto"
        priority
        />
    </div>
       
    <div
  ref={divRef}
  className="absolute top-[104%] left-[50%] w-[45%] h-[150px] transform -translate-y-[50%] -translate-x-[50%] cursor-pointer"
>
  <a
    href="/wordte/Doc13_ObJets_Culturels_Albums_ABC_Cultures_Full_Expanded_Final.pdf"
    download
    className="block w-full h-full"
  >
    <span className="sr-only">Télécharger le document</span>
  </a>
</div>

{/* Tooltip qui suit le curseur */}
{showTooltip && (
  <div
    className="pointer-events-none z-50"
    style={{
      position: 'absolute',
      left: `${mousePos.x + 18}px`,
      top: `${mousePos.y - 60}px`,
    }}
  >
    <div
      style={{
        background: 'linear-gradient(135deg, #f7f309 0%, #ffe600 100%)',
        color: '#1a1a1a',
        padding: '10px 16px',
        borderRadius: '12px',
        fontSize: '13px',
        fontWeight: '600',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15), 0 0 0 2px rgba(0,0,0,0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        whiteSpace: 'nowrap',
        letterSpacing: '0.2px',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Cliquer pour télécharger le document
    </div>
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: '8px solid #ffe600',
        marginLeft: '20px',
      }}
    />
  </div>
)}

        <div className="absolute bottom-26 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
          <Fleche prevPath = "/histoire-enfant" nextPath = "/votre-box"/>
        </div>
    </>
  );
}
