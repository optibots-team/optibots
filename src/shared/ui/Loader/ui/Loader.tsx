import { classNames } from '@shared/lib/classNames';
import styles from './Loader.module.scss';

type LoaderProps = {
	className?: string;
};

const Loader = ({ className }: LoaderProps) => (
	<span className={classNames(styles.loader, {}, [className])}/>
);

export default Loader;