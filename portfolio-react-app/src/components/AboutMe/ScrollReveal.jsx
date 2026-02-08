// portfolio-react-app/src/components/AboutMe/ScrollReveal.jsx
import React, { useState, useEffect, useRef } from 'react';
import AboutMe from './AboutMe.jsx';
import styles from './ScrollReveal.module.css';
import neuebit from '../../assets/fonts/ppneuebit-bold.otf';

const BLOB_CONFIGS = [
  { size: 250, lag: 0.05, morphSpeed: 3, offsetX: 10, offsetY: 2 },
];

function randomRadii() {
  return Array.from({ length: 8 }, () => 30 + Math.random() * 16);
}

function ScrollReveal() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const denom = Math.max(rect.height - windowHeight, 1);
      const progress = Math.min(Math.max(-rect.top / denom, 0), 1);
      setScrollProgress(progress);
    };
    handleScroll(); // set initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // blob state
  const mouseRef = useRef({ x: -999, y: -999 });
  const blobsRef = useRef(
    BLOB_CONFIGS.map(() => ({
      x: -999, y: -999,
      currentRadii: randomRadii(),
      targetRadii: randomRadii(),
      morphT: Math.random(),
    }))
  );
  const rafRef = useRef(null);
  const [blobStyles, setBlobStyles] = useState(() =>
    BLOB_CONFIGS.map(cfg => ({
      left: -999, top: -999,
      width: cfg.size, height: cfg.size,
      borderRadius: '50%',
    }))
  );

  // mouse tracking (relative to containerRef)
  useEffect(() => {
    const onMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // rAF loop
  useEffect(() => {
    let lastTime = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 16.67, 3);
      lastTime = now;
      const { x: mx, y: my } = mouseRef.current;
      const blobs = blobsRef.current;
      const next = [];

      blobs.forEach((blob, i) => {
        const cfg = BLOB_CONFIGS[i];
        blob.x += (mx + cfg.offsetX - blob.x) * cfg.lag * dt;
        blob.y += (my + cfg.offsetY - blob.y) * cfg.lag * dt;

        blob.morphT += 0.014 * cfg.morphSpeed * dt;
        if (blob.morphT >= 1) {
          blob.currentRadii = blob.targetRadii;
          blob.targetRadii = randomRadii();
          blob.morphT = 0;
        }
        const t = blob.morphT;
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const r = blob.currentRadii.map((v, idx) => v + (blob.targetRadii[idx] - v) * ease);

        next.push({
          left: blob.x - cfg.size / 2,
          top: blob.y - cfg.size / 2,
          width: cfg.size,
          height: cfg.size,
          borderRadius: `${r[0]}% ${r[1]}% ${r[2]}% ${r[3]}% / ${r[4]}% ${r[5]}% ${r[6]}% ${r[7]}%`,
        });
      });

      setBlobStyles(next);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div>
      <style>{`
        @font-face {
          font-family: 'Neue Bit';
          src: url(${neuebit}) format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className={styles.spacer} />

      <div ref={containerRef} className={styles.stickyContainer}>
        <div className={styles.stickySection}>
          <div
            className={styles.titleSection}
            style={{ transform: `translateX(${-scrollProgress * 100}%)` }}
          >
            <div className={styles.titleContent}>
              <h1 style={{ fontFamily: 'Neue Bit, sans-serif' }}>Hayley <br/> Far</h1>
            </div>
          </div>

          <div className={styles.aboutMeSection}>
            <AboutMe />
          </div>

          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            pointerEvents: 'none',
            opacity: scrollProgress > 0.01 ? 0 : 1,
            transition: 'opacity 0.6s ease'
          }}>
            {blobStyles.map((s, i) => (
              <div key={i} style={{
                position: 'absolute',
                left: s.left,
                top: s.top,
                width: s.width,
                height: s.height,
                borderRadius: s.borderRadius,
                overflow: 'hidden',
                backdropFilter: 'blur(2px) brightness(1.05)',
                WebkitBackdropFilter: 'blur(2px) brightness(1.05)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.08) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.1), 0 2px 12px rgba(0,0,0,0.15)',
              }}>
                <div style={{
                  position: 'absolute',
                  left: -s.left,
                  top: -s.top,
                  width: '100vw',
                  height: '100vh',
                  background: '#000',
                }}>
                  <div
                    className={styles.titleSectionBehind}
                    style={{
                      transform: `translateX(${-scrollProgress * 100}%)`,
                      transition: 'transform 0.1s linear',
                    }}
                  >
                    <pre className={styles.codeBlock}>
                      <code>
                        <span className={styles.keyword}>public class</span> AboutMe {"{"}
                        {"\n"}  <span className={styles.keyword}>String</span> name;
                        {"\n"}  <span className={styles.keyword}>String</span> status;
                        {"\n"}  <span className={styles.keyword}>boolean</span> curiousByNature = <span className={styles.value}>true</span>;
                        {"\n"}  <span className={styles.keyword}>String</span> energy = busyDay ? <span className={styles.value}>"Surviving"</span> : <span className={styles.value}>"Thriving"</span>;
                        {"\n\n"}  <span className={styles.value}>/**</span>
                        {"\n"}   <span className={styles.value}> * Who am I?</span>
                        {"\n"}   <span className={styles.value}> */</span>
                        {"\n"}  <span className={styles.keyword}>public</span> AboutMe() {"{"}
                        {"\n"}    <span className={styles.keyword}>this.name</span> = <span className={styles.value}>"Hayley Far"</span>;
                        {"\n"}    <span className={styles.keyword}>this.status</span> = getStatus();
                        {"\n"}  {"}"}
                        {"\n\n"}  <span className={styles.value}>/**</span>
                        {"\n"}   <span className={styles.value}> * A method to get my current status as a student</span>
                        {"\n"}   <span className={styles.value}> * @return String of what I do</span>
                        {"\n"}   <span className={styles.value}> */</span>
                        {"\n"}  <span className={styles.keyword}>public</span> String getStatus() {"{"}
                        {"\n"}    <span className={styles.keyword}>return</span> <span className={styles.value}>"3rd year Software Engineering student at VUW"</span>;
                        {"\n"}  {"}"}
                        {"\n"}{"}"}
                      </code>
                    </pre>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollReveal;
