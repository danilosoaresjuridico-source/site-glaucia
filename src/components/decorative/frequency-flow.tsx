import styles from "./frequency-flow.module.css";

const pulsePath = "M -40 64 C 90 24 210 104 350 64 S 610 28 745 67 S 980 104 1135 57 S 1355 28 1480 64";

function Pulse({ className }: { className: string }) {
  return (
    <g className={className}>
      <circle className={styles.pulseHalo} cx="0" cy="0" r="18" />
      <circle className={styles.pulseGlow} cx="0" cy="0" r="8" />
      <circle className={styles.pulseCore} cx="0" cy="0" r="3.2" />
    </g>
  );
}

export function FrequencyFlow() {
  return (
    <div className={styles.transition} data-frequency-flow aria-hidden="true">
      <svg
        className={styles.art}
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="frequency-deep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#22392f" stopOpacity="0" />
            <stop offset="0.2" stopColor="#22392f" stopOpacity="0.44" />
            <stop offset="0.78" stopColor="#22392f" stopOpacity="0.38" />
            <stop offset="1" stopColor="#22392f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="frequency-sage" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7d9284" stopOpacity="0" />
            <stop offset="0.25" stopColor="#7d9284" stopOpacity="0.48" />
            <stop offset="0.75" stopColor="#7d9284" stopOpacity="0.42" />
            <stop offset="1" stopColor="#7d9284" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="frequency-gold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#b0894a" stopOpacity="0" />
            <stop offset="0.3" stopColor="#b0894a" stopOpacity="0.38" />
            <stop offset="0.7" stopColor="#b0894a" stopOpacity="0.34" />
            <stop offset="1" stopColor="#b0894a" stopOpacity="0" />
          </linearGradient>
          <filter id="frequency-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <g className={styles.waves} data-frequency-waves>
          <path className={styles.waveDeep} d={pulsePath} />
          <path
            className={styles.waveSage}
            d="M -35 73 C 115 42 225 93 370 68 S 615 42 770 72 S 1000 91 1160 64 S 1360 43 1480 70"
          />
          <path
            className={styles.waveGold}
            d="M -30 55 C 105 78 235 37 380 59 S 635 85 785 57 S 1015 36 1175 66 S 1365 82 1480 57"
          />
        </g>

        <g className={styles.movingPulse} data-frequency-pulse>
          <Pulse className={styles.pulse} />
          <animateMotion
            begin="0s"
            calcMode="linear"
            dur="10.5s"
            path={pulsePath}
            repeatCount="indefinite"
          />
        </g>
        <g className={styles.staticPulse} data-frequency-static-pulse transform="translate(745 67)">
          <Pulse className={styles.pulse} />
        </g>
      </svg>
    </div>
  );
}
