export interface NavLink {
	href: string;
	label: string;
}

export const navLinksHeader: NavLink[] = [
	{ href: '#servicios', label: 'Servicios' },
	{ href: '#para-quien', label: 'Para quién' },
	{ href: '#incluye', label: 'Qué incluye' },
	//{ href: '#contacto', label: 'Contacto' },
];

export const navLinksFooter: NavLink[] = [
	{ href: '#servicios', label: 'Servicios' },
	{ href: '#para-quien', label: 'Para quién' },
	{ href: '#incluye', label: 'Qué incluye' },
	{ href: '#contacto', label: 'Contacto' },
];
