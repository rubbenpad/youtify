import React from 'react'
import { Svg } from './styles'

function Logo() {
  return (
    <Svg
      width={551.08}
      height={122.021}
      viewBox="-25.54 13.989 551.08 122.021"
      style={{
        background: '0 0',
      }}
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <linearGradient
          id="prefix__editing-gradow-gradient"
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#f0f" />
          <stop offset={1} stopColor="#0ff" />
        </linearGradient>
        <filter
          id="prefix__editing-gradow-filter"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="rgba(0%,0%,0%,0)" result="flood" />
          <feComposite
            operator="in"
            in2="SourceAlpha"
            in="flood"
            result="shadow"
          />
          <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
          <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
          <feMerge>
            <feMergeNode in="offset-2" />
            <feMergeNode in="offset-1" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-gradow-filter)">
        <path
          d="M26.11-42.69q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57H22.4q-.38 0-.7.07L14.34 0H.45l7.87-41.92q6.85-.64 10.82-.7 3.96-.07 6.97-.07zM68.86-9.86q1.22 1.54 1.22 4.52 0 2.97-2.27 4.8-2.27 1.82-6.24 1.82-2.31 0-5.89-.51-7.04-1.09-9.06-1.09-2.01 0-2.84.1-.84.09-2.18.22l7.74-42.24h14.02l-6.4 35.2q.83.13 1.6.13h1.6q5.38 0 8.7-2.95zm33.6 11.14q-8.19 0-8.96-11.65h-11q-1.28 2.95-2.18 5.51L78.66 0H69.7l20.16-42.24h13.76l2.68 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71zM88-23.17l-3.52 8.13h8.83l-.77-16.45v-1.73L88-23.17zm30.34-8q-2.18-1.66-2.18-5.21 0-3.56 2.34-5.41 2.33-1.86 6.36-1.86 2.56 0 8.64.9l4.36.64q2.17.25 4.44.25 2.28 0 3.81-.96 2.31 2.05 2.31 5 0 2.94-2.63 5.05-2.69 2.24-6.14 2.24-1.67 0-4.35-.45-3.14 9.86-3.14 16.71 0 6.85 3.46 10.43-1.6 2.88-3.97 4t-5.92 1.12q-3.55 0-5.76-1.95t-2.21-5.99q0-4.67 2.56-12.35 2.56-7.61 6.4-13.44-1.86-.19-3.78-.19-3.96 0-4.6 1.47zM159.9.16q-3.42-.61-5.21-.86-1.79-.26-3.68-.26-1.89 0-2.85.96-1.47-1.09-2.24-4.54-.26-.96-.26-2.56 0-3.46 3.97-6.85l19.97-16.39q-8.26-1.34-11.58-1.34-3.33 0-6.4 1.47-1.73-2.81-1.73-6.08 0-3.26 2.4-4.93 2.4-1.66 6.43-1.66 1.79 0 3.71.26 1.92.25 3.84.51l3.78.57q1.85.26 4.25.26t5.09-.64q2.56 2.24 2.56 5.95 0 4.48-3.07 6.91l-21.76 17.41q4.67 1.28 12.42 1.28 3.84 0 6.27-1.92 1.09 1.41 1.37 2.59.29 1.19.29 2.88 0 1.7-.57 3.08-.58 1.37-1.8 2.4-2.43 2.11-7.8 2.11-3.97 0-7.4-.61zM196.54 0h-13.95l8.13-42.24h14.08L196.54 0zm11.27-39.68q1.85-3.84 7.01-3.84 5.15 0 7.55 2.98 2.4 2.97 2.4 9.82v22.85l15.55-34.31h7.62L228.03 0h-14.97l-1.92-30.72q-.2-3.39-1.12-5.7-.93-2.3-2.21-3.26zM258.62 0h-13.95l8.13-42.24h14.08L258.62 0zm51.2-26.56Q309.82.7 280.26.7q-4.74 0-12.55-1.15l7.17-37.82q.51-2.56.83-4.03 9.73-.71 14.05-.71t8.29.9q3.97.89 6.59 2.88 5.18 3.9 5.18 12.67zm-13.18-2.37q0-9.53-6.85-9.53h-.64q-.32 0-.64.06l-6.59 34.37q.26.13.51.13h.51q2.37 0 4.84-1.48 2.46-1.47 4.38-4.48 4.48-6.97 4.48-19.07zm43.78 19.07q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51-6.92-1.09-9.03-1.09-2.11 0-2.94.1-.83.09-2.18.22l7.87-42.24h27.59q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2h11.39q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.79 0-4.51-.64-1.73-.64-1.92-.83l-2.31 12.09q1.54.2 4.42.2 4.93 0 8.45-3.08zm8.06-5.76q0-12.09 6.27-19.71 6.66-8.25 18.24-8.25 8.39 0 12.61 4.06 4.22 4.06 4.22 12.64 0 13.06-6.65 20.67-6.59 7.49-17.67 7.49-8.64 0-12.83-4.32-4.19-4.32-4.19-12.58zm16.83-13.24q-2.88 11.52-2.88 20.6 0 2.18.74 3.59.73 1.41 2.69 1.41 1.95 0 3.16-.93 1.22-.93 2.18-3.04 1.54-3.46 2.98-10.79 1.44-7.32 1.56-10.36.13-3.04.13-5.35 0-2.3-.7-3.77-.71-1.48-2.59-1.48-1.89 0-3.17 1.16-2.37 2.17-4.1 8.96z"
          fill="url(#prefix__editing-gradow-gradient)"
          transform="translate(54.865 97.457)"
        />
      </g>
      <style />
    </Svg>
  )
}

export default Logo
