export type InputControl = {
	type: string;
	properties: InputControlProperties;
	'x-bk-cpy-schema': InputControlXbkCpySchema[];
	'x-bk-nxp-group-id': number;
};
export type InputControlPropertiesTipoCons = {
	maxLength: number;
	type: string;
	'x-bk-nxp-field-id': number;
	'x-bk-nxp-field-type-id': number;
};
export type InputControlPropertiesOperativaCentro = {
	maxLength: number;
	type: string;
	'x-bk-nxp-field-id': number;
	'x-bk-nxp-field-type-id': number;
};
export type InputControlPropertiesCentro = {
	maxLength: number;
	type: string;
	'x-bk-nxp-field-id': number;
	'x-bk-nxp-field-type-id': number;
};
export type InputControlProperties = {
	'TIPO-CONS': InputControlPropertiesTipoCons;
	'OPERATIVA_CEN': InputControlPropertiesOperativaCentro;
	CENTRO: InputControlPropertiesCentro;
};
export type InputControlXbkCpySchema = {
	src: string;
	len: number;
	sep: string;
};
