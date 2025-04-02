import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { LocaleSwitcher } from '@features/LocaleSwitcher';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => {
	const t = useTranslations('header');

	return (
		<header className={classNames(styles.header, {}, [className])}>
			<Container className={styles.header__container}>
				<h1>{t('caption')}</h1>
				<LocaleSwitcher />
			</Container>
		</header>
	);
};

export default Header;