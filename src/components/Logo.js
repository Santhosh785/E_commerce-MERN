import React from 'react'

const Logo = ({ w, h }) => {
    return (
        <svg width={w} height={h} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DC2626" /> {/* red-600 */}
                    <stop offset="100%" stopColor="#FB923C" /> {/* orange-400 */}
                </linearGradient>
            </defs>

            {/* Shopping Bag Icon */}
            <path
                d="M20 20H15C13.8954 20 13 20.8954 13 22V50C13 51.1046 13.8954 52 15 52H45C46.1046 52 47 51.1046 47 50V22C47 20.8954 46.1046 20 45 20H40"
                stroke="url(#logoGradient)"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <path
                d="M20 25V18C20 12.4772 24.4772 8 30 8C35.5228 8 40 12.4772 40 18V25"
                stroke="url(#logoGradient)"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Brand Name */}
            <text
                x="60"
                y="42"
                fontFamily="Inter, sans-serif"
                fontWeight="800"
                fontSize="28"
                fill="#1F2937"
                style={{ letterSpacing: '-0.05em' }}
            >
                DYNAMIC
            </text>
            <text
                x="60"
                y="58"
                fontFamily="Inter, sans-serif"
                fontWeight="400"
                fontSize="12"
                fill="#6B7280"
                style={{ letterSpacing: '0.4em' }}
            >
                STORE
            </text>
        </svg>
    )
}

export default Logo