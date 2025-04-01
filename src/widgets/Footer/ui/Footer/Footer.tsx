import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = ({ className }: FooterProps) => (
	<footer className={classNames(styles.footer, {}, [className])}>
		<Container>
			<h1>footer</h1>
		</Container>
	</footer>
);

export default Footer;