import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => (
	<header className={classNames(styles.header, {}, [className])}>
		<Container>
			<h1>header</h1>
		</Container>
	</header>
);

export default Header;