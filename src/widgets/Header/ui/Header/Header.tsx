import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import { FlexH } from '@shared/ui/Stack';
import { Nav } from '@features/Nav';
import { LocaleSwitcher } from '@features/LocaleSwitcher';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => (
	<header className={classNames(styles.header, {}, [className])}>
		<Container className={styles.header__container}>
			<Logo />
			<FlexH align={'center'} gap={'32'} className={'ml-a'}>
				<Nav />
				<LocaleSwitcher />
			</FlexH>
		</Container>
	</header>
);

export default Header;