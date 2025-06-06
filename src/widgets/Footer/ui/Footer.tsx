import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import { Nav } from '@features/Nav';
import { FlexH } from '@shared/ui/Stack';
import { LocaleSwitcher } from '@features/LocaleSwitcher';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = ({ className }: FooterProps) => (
	<footer className={classNames(styles.footer, {}, [className])}>
		<Container display={'flex'} orientation={'horizontal'} className={styles.footer__container}>
			<Logo theme={'light'} />
			<FlexH align={'center'} gap={'32'} className={'ml-a'}>
				<Nav theme={'light'} location={'footer'} />
				<LocaleSwitcher theme={'light'} />
			</FlexH>
		</Container>
	</footer>
);

export default Footer;