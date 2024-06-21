import { Control, EventoElement } from './view.interface.ts';

export type ControlEvents = { [key: number]: Control & { eventos: EventoElement[] } };
