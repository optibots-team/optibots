import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = ({ className }: FooterProps) => {
	const t = useTranslations('footer');

	return (
		<footer className={classNames(styles.footer, {}, [className])}>
			<Container>
				<h1>{t('caption')}</h1>
			</Container>
		</footer>
	);
};

export default Footer;