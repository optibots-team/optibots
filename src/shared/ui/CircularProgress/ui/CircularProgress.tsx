import type { CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './CircularProgress.module.scss';

type CircularProgressProps = {
	className?: string;
	value: number;
	size?: number;
	strokeWidth?: number;
};

const CircularProgress = (props: CircularProgressProps) => {
	const { className, value, size = 100, strokeWidth = 15 } = props;
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (value / 100) * circumference;
	const style: CSSProperties = {
		width: size,
		height: size,
	};

	return (
		<span className={classNames(styles.progress, {}, [className])} style={style}>
			<svg width={'100%'} height={'100%'}>
				<defs>
					<linearGradient id={'progressGradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
						<stop offset={'0%'} stopColor={'#65B7E1'} />
						<stop offset={'100%'} stopColor={'#B8E986'} />
					</linearGradient>
				</defs>
				<circle
					stroke={'rgba(0, 0, 0, .05)'}
					fill={'transparent'}
					strokeWidth={strokeWidth}
					r={radius}
					cx={size / 2}
					cy={size / 2}
				/>
				<circle
					stroke='url(#progressGradient)'
					fill={'transparent'}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					r={radius}
					cx={size / 2}
					cy={size / 2}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
				/>
				<text
					x={'50%'}
					y={'50%'}
					dominantBaseline={'middle'}
					textAnchor={'middle'}
					fontFamily={'var(--font-montserrat), sans-serif'}
					fontSize={'var(--font-size-ml)'}
					fill={'var(--color-dark)'}
					fontWeight={'500'}
				>
					{Math.round(value)}%
				</text>
			</svg>
		</span>
	);
};

export default CircularProgress;