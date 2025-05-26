import { socialLinks } from '@shared/const/socialLinks';
import type { ISocial } from '../types/Socials.types';
import TelegramIcon from '@shared/assets/icons/socials/telegram.svg';
import InstagramIcon from '@shared/assets/icons/socials/instagram.svg';
import LinkedinIcon from '@shared/assets/icons/socials/linkedin.svg';
import YoutubeIcon from '@shared/assets/icons/socials/youtube.svg';

export const socials: ISocial[] = [
	{
		name: 'telegram',
		icon: <TelegramIcon />,
		url: socialLinks.TELEGRAM,
	},
	{
		name: 'instagram',
		icon: <InstagramIcon />,
		url: socialLinks.INSTAGRAM,
	},
	{
		name: 'linkedin',
		icon: <LinkedinIcon />,
		url: socialLinks.LINKEDIN,
	},
	{
		name: 'youtube',
		icon: <YoutubeIcon />,
		url: socialLinks.YOUTUBE,
	},
];