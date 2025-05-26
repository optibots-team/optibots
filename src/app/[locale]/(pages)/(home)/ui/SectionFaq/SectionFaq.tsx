import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { TextColor } from '@shared/ui/Text';
import styles from './SectionFaq.module.scss';
import QuestionIcon from '@shared/assets/icons/question_gradient.svg';

type SectionFaqProps = {
	className?: string;
};

const SectionFaq = ({ className }: SectionFaqProps) => {
	const tSection = useTranslations('homePage.sectionFaq');

	return (
		<section className={classNames(styles.faq, {}, [className, 'section-padding'])}>
			<Container>
				<SectionTitle
					className={styles.contacts__title}
					align={'center'}
					badge={{
						background: 'dark',
						icon: <QuestionIcon />,
						text: tSection('badge').toUpperCase(),
					}}
					text={{
						title: tSection('sectionTitle').toUpperCase(),
						color: TextColor.DARK,
					}}
				/>
			</Container>
		</section>
	);
};

export { SectionFaq };