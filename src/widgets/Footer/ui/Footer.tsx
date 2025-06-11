import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import { Nav } from '@features/Nav';
import { FlexH } from '@shared/ui/Stack';
import { LocaleSwitcher } from '@features/LocaleSwitcher';
import { ButtonToTop } from '@features/ButtonToTop';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = ({ className }: FooterProps) => (
	<footer className={classNames(styles.footer, {}, [className])}>
		<Container display={'flex'} orientation={'vertical'} className={styles.footer__container}>
			<FlexH>
				<FlexH justify={'between'} align={'stretch'} gap={'12'} className={styles.footer__logo}>
					<Logo theme={'light'} />
					<ButtonToTop className={styles.footer__btn} />
				</FlexH>
				<FlexH align={'center'} gap={'32'} className={styles.footer__nav}>
					<Nav theme={'light'} location={'footer'} />
					<LocaleSwitcher theme={'light'} />
				</FlexH>
			</FlexH>
			<p className={styles.footer__copyright}>&copy; 2025 OptiBots, All Rights Reserved.</p>
		</Container>
	</footer>
);

export default Footer;