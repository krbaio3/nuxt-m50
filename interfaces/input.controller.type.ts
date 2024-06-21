import {type ChurreraCore} from './churrera.type.ts';

export type InputController = Omit<ChurreraCore, 'type'> & {
	input: HTMLInputElement;
};

