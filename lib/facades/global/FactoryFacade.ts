import '../../factory/FactoryManager'
import { make } from 'najs-binding'
import { Facade, IFacade, IFacadeBase } from 'najs-facade'
import { container } from '../container'
import { NajsEloquentClass } from '../../constants'
import { IFactoryManager, ModelClass } from '../../factory/interfaces/IFactoryManager'
import { IFactoryBuilder } from '../../factory/interfaces/IFactoryBuilder'
import { IFactory } from '../../factory/interfaces/IFactory'
import { ChanceFaker } from '../../factory/FactoryManager'

const facade = Facade.create<IFactoryManager<ChanceFaker>>(container, 'FactoryManager', function() {
  return make<IFactoryManager<ChanceFaker>>(NajsEloquentClass.FactoryManager)
})

export const FactoryFacade: IFactoryManager<ChanceFaker> & IFacade = facade
export const Factory: IFactoryManager<ChanceFaker> & IFacadeBase = facade
export const factory: IFactory = function(className: string | ModelClass, name: string = 'default'): IFactoryBuilder {
  return Factory.of(className, name)
}
