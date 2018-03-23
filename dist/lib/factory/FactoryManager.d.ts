import { IAutoload } from 'najs-binding';
import { IFactoryBuilder } from './interfaces/IFactoryBuilder';
import { IFactoryManager, FactoryDefinition } from './interfaces/IFactoryManager';
export declare type ChanceFaker = Chance.Chance;
export declare class FactoryManager implements IAutoload, IFactoryManager<ChanceFaker> {
    protected faker: ChanceFaker;
    protected definitions: {};
    protected states: {};
    constructor();
    getClassName(): string;
    define(className: string, definition: FactoryDefinition<ChanceFaker>, name?: string): this;
    defineAs(className: string, name: string, definition: FactoryDefinition<ChanceFaker>): this;
    state(className: string, state: string, definition: FactoryDefinition<ChanceFaker>): this;
    of(className: string): IFactoryBuilder;
    of(className: string, name: string): IFactoryBuilder;
    create<T = any>(className: string): Promise<T>;
    create<T = any>(className: string, attributes: Object): Promise<T>;
    createAs<T = any>(className: string, name: string): Promise<T>;
    createAs<T = any>(className: string, name: string, attributes: Object): Promise<T>;
    make<T = any>(className: string): T;
    make<T = any>(className: string, attributes: Object): T;
    makeAs<T = any>(className: string, name: string): T;
    makeAs<T = any>(className: string, name: string, attributes: Object): T;
    raw<T = any>(className: string): T;
    raw<T = any>(className: string, attributes: Object): T;
    rawOf<T = any>(className: string, name: string): T;
    rawOf<T = any>(className: string, name: string, attributes: Object): T;
}
