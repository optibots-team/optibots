import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { FlexV } from '@shared/ui/Stack';
import { Button, ButtonTheme } from '@shared/ui/Button';
import { SectionTitle } from '@features/SectionTitle';
import { TariffsList } from '../TariffsList/TariffsList';
import { generateTariffs } from '../../../model/data/sectionTariffs.data';
import { Text, TextAlign, TextColor, TextSize } from '@shared/ui/Text';
import styles from './SectionTariffs.module.scss';
import PyramidIcon from '@shared/assets/icons/pyramid_gradient.svg';

type SectionTariffsProps = {
	className?: string;
};

const SectionTariffs = ({ className }: SectionTariffsProps) => {
	const tSection = useTranslations('homePage.sectionTariffs');
	const tTariffs = useTranslations('tariffs');
	const tButtons = useTranslations('buttons');
	const tariffs = useMemo(() => generateTariffs(tTariffs), [tTariffs]);

	return (
		<section className={classNames(styles.tariffs, {}, [className, 'section-padding', 'section-radius-top'])}>
			<Container>
				<SectionTitle
					className={styles.tariffs__title}
					badge={{
						bordered: true,
						background: 'transparent',
						icon: <PyramidIcon />,
						text: tSection('badge'),
					}}
					text={{
						title: tSection.rich('sectionTitle', { br: () => <br />}),
						color: TextColor.WHITE,
					}}
					align={'center'}
				/>
				<TariffsList tariffs={tariffs} className={styles.tariffs__list} />
				<FlexV gap={'24'} justify={'center'} align={'center'} className={styles.tariffs__cta}>
					<Text
						titleTag={'h4'}
						size={TextSize.M}
						align={TextAlign.CENTER}
						color={TextColor.WHITE}
						title={tSection('cta').toUpperCase()}
					/>
					<Button theme={ButtonTheme.GREEN_GRADIENT} fontFamily={'unbounded'} className={'fw-500'}>
						{tButtons('order bot').toUpperCase()}
					</Button>
				</FlexV>
			</Container>
		</section>
	);
};

export { SectionTariffs };