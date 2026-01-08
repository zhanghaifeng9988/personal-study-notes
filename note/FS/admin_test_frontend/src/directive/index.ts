import type { App } from 'vue';
import { hasPerm } from './permission/hasPerm';
export default function directive(app: App<Element>) {
  app.directive('hasPerm', hasPerm);
  //如果有其它的指令可以继续添加
}
