import { useTranslations } from 'next-intl';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@features/SectionTitle';
import { FaqAccordion } from '@widgets/FaqAccordion';
import styles from './SectionFaq.module.scss';
import QuestionIcon from '@shared/assets/icons/question_gradient.svg';

type SectionFaqProps = {
	className?: string;
};

const SectionFaq = ({ className }: SectionFaqProps) => {
	const tSection = useTranslations('homePage.sectionFaq');

	return (
		<section className={classNames(styles.faq, {}, [className, 'section-padding'])}>
			<Container display={'flex'} orientation={'vertical'} className={styles.faq__container}>
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
						color: 'dark',
					}}
				/>
				<FaqAccordion />
			</Container>
		</section>
	);
};

export { SectionFaq };