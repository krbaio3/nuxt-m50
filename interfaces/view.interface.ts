import { GlobalResponseTypes } from './globalResponse.types.ts';
import { EventMediatorMethodKeys } from '../../lib/types/mediator/event-mediator.types.ts';

export enum TAG {
	INPUT = 'input',
	BUTTON = 'button',
	LABEL = 'label',
	BITMAP = 'bitmap',
	BITMAP_BUTTON = 'bitmap button',
	CHECKBOX = 'checkbox',
	COMBO = 'combo',
	GROUP_BOX = 'groupbox',
	LIST_BOX = 'listbox',
	PANEL_RAISED = 'panel raised',
	PANEL_RECESSED = 'panel recessed',
	TABLE = 'table',
	TEMPLATE = 'template',
}

export interface Control {
	tag: TAG;
	pos_x: number;
	pos_y: number;
	width: number;
	height: number;
	cap_control: string | undefined;
	control_id: number;
}

export interface Dialogo {
	dialogo_name: string;
	dialogo_id: number;
	dialogo_height: number;
	dialogo_width: number;
	dialogo_pos_x: number;
	dialogo_pos_y: number;
}

export interface Secuencia {
	secuencia_name: string;
	secuencia_width: number;
	secuencia_height: number;
	codigo_aplicacion: string;
	codigo_transaccion: string;
}

export interface EventoElement {
	secuencia_id: number;
	dialogo_id: number;
	control_id: number;
	evento: number;
	funcion_id: number;
	parametros: string;
	tipo_fun_id: number;
	tipo_fun_id_method: EventMediatorMethodKeys;
	orden: number;
	variable_salida: number;
	variable_nombre: string;
	variable_id: string;
	variable_tipo_variable_id: string;
	variable_valor: string;
}

export interface ViewData {
	secuencia: Secuencia;
	dialogo: Dialogo;
	controles: Control[];
	eventos: EventoElement[];
}

export interface RelationsData {
	secuencia_id: number;
	nodo_id: number;
	nodo_next_id: number;
	orden_salida_id: number;
	tipo_id: number;
	parametros: string;
	funcion_id: number;
	tipo_id_nexoapi: number;
	method: string;
	descripcion: string;
	proceso_nombre: string;
	dll_id: number;
	campos_extra: number;
	dll_32: string;
	cod_aplicacion: string;
}

export interface Grid {
	comp_id: number;
	orden: number;
	codigo: number;
	parametros: string;
}

export interface RelationsGrid {
	relations: RelationsData[];
	grid: Grid[];
}

export interface View extends GlobalResponseTypes<ViewData> {}

export interface Relations extends GlobalResponseTypes<RelationsGrid> {}
