import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { SectionTitle } from '@features/SectionTitle';
import AtomIcon from '@shared/assets/icons/atom_gradient.svg';

type AboutTitleProps = {
	className?: string;
};

const AboutTitle = ({ className }: AboutTitleProps) => {
	const t = useTranslations('homePage.sectionAbout');

	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<SectionTitle
				className={className}
				badge={{
					bordered: true,
					icon: <AtomIcon/>,
					text: t('badge'),
				}}
				text={{
					title: t.rich('sectionTitle', { br: () => <br/> }),
					text: t('sectionDesc'),
					color: 'white',
				}}
			/>
		</motion.div>
	);
};

export { AboutTitle };