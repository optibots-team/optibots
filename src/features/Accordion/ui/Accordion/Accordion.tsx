import { AccordionItem } from '../AccordionItem/AccordionItem';
import type { ColorTheme } from '@shared/types/themes.types';
import type { AccordionItem as IAccordionItem } from '../../model/types/accordion.types';

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
					key={item.id}
					item={item}
					counter={counter ? i + 1 : null}
					theme={theme}
				/>
			))}
		</ul>
	);
};

export default Accordion;