"use client"

import React from 'react';
import styled, { keyframes } from 'styled-components';

const DEFAULT_COLOR = '#FFC700';

interface Sparkle {
    id: string;
    createdAt: number;
    color: string;
    size: number;
    style: {
        top: string;
        left: string;
    };
}

const generateSparkle = (color: string): Sparkle => {
    const sparkle: Sparkle = {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        color,
        size: random(10, 20),
        style: {
            top: random(0, 100) + '%',
            left: random(0, 100) + '%',
        },
    };
    return sparkle;
};

const Sparkles: React.FC<{ color?: string; children?: React.ReactNode }> = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
    const [sparkles, setSparkles] = React.useState<Sparkle[]>(() => {
        return range(3).map(() => generateSparkle(color));
    });
    const prefersReducedMotion = usePrefersReducedMotion();
    useRandomInterval(
        () => {
            const sparkle = generateSparkle(color);
            const now = Date.now();
            const nextSparkles = sparkles.filter(sp => {
                const delta = now - sp.createdAt;
                return delta < 750;
            });
            nextSparkles.push(sparkle);
            setSparkles(nextSparkles);
        },
        prefersReducedMotion ? null : 50,
        prefersReducedMotion ? null : 450
    );
    return (
        <Wrapper {...delegated}>
            {sparkles.map(sparkle => (
                <Sparkle
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
            <ChildWrapper>{children}</ChildWrapper>
        </Wrapper>
    );
};

interface SparkleProps {
    size: number;
    color: string;
    style: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ size, color, style }) => {
    const path =
        'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
    return (
        <SparkleWrapper style={style}>
            <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
                <path d={path} fill={color} />
            </SparkleSvg>
        </SparkleWrapper>
    );
};

const comeInOut = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
`;

const Wrapper = styled.span`
    display: inline-block;
    position: relative;
`;

const SparkleWrapper = styled.span`
    position: absolute;
    display: block;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${comeInOut} 700ms forwards;
    }
`;

const SparkleSvg = styled.svg`
    display: block;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${spin} 1000ms linear;
    }
`;

const ChildWrapper = styled.strong`
    position: relative;
    z-index: 1;
    font-weight: bold;
`;

// Helper functions
const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const range = (count: number) => {
    return Array.from({ length: count });
};

const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = React.useState<boolean>(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return prefersReducedMotion;
};

const useRandomInterval = (callback: () => void, minDelay: number | null, maxDelay: number | null) => {
    const timeoutId = React.useRef<number | null>(null);
    const savedCallback = React.useRef(callback);

    React.useEffect(() => {
        savedCallback.current = callback;
    });

    React.useEffect(() => {
        let isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';
        if (isEnabled) {
            const delay = random(minDelay!, maxDelay!);
            const tick = () => {
                savedCallback.current();
                schedule();
            };
            const schedule = () => {
                const id = window.setTimeout(tick, delay);
                timeoutId.current = id;
            };
            schedule();
        }
        return () => {
            if (timeoutId.current) {
                window.clearTimeout(timeoutId.current);
            }
        };
    }, [minDelay, maxDelay]);

    return timeoutId.current;
};

export default Sparkles;
