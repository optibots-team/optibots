import { AccordionItem } from '../AccordionItem/AccordionItem';
import { ColorTheme } from '@shared/types/Themes.types';
import type { IAccordionItem } from '../../model/types/Accordion.types';

type AccordionProps = {
	className?: string;
	items: IAccordionItem[];
	counter?: boolean;
	theme?: ColorTheme;
};

const Accordion = (props: AccordionProps) => {
	const { className, items, counter, theme = 'light' } = props;

	return (
		<ul className={className}>
			{items.map((item, i) => (
				<AccordionItem
					key={item.title}
					item={item}
					counter={counter ? i + 1 : null}
					theme={theme}
				/>
			))}
		</ul>
	);
};

export default Accordion;