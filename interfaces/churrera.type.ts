export type ChurreraCore = {
	value: string;
	maxLength: number;
	type: string;
	fieldId: number;
	fieldTypeId: number;
};

export type WelcomeType = {
	modal: HTMLDivElement;
	btnAccept: HTMLButtonElement;
	btnCancel: HTMLButtonElement;
	btnClose: HTMLButtonElement;
	input: HTMLInputElement;
};

export type GridParametersType = {
	orden: string;
	codigo: number;
	comp_id: number;
	width: string;
	visible: string;
	cut: string;
	value: string;
	[key: string]: string | number;
};
