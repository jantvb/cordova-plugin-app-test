import { Injectable } from '@angular/core';
//import { Cordova } from '@ionic-native/core/decorators/interfaces';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
//import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/*@Plugin({
  pluginName: 'faceme',
  plugin: 'cordova-plugin-faceme',
  pluginRef: 'FaceMe',
  repo: 'https://github.com/kakismash/cordova-plugin.git',
  platforms: ['Android']
})*/

@Injectable({
  providedIn: 'root'
})
export class FaceMeService extends IonicNativePlugin {

  static pluginName = 'faceme';
  static plugin = 'cordova-plugin-faceme';
  static pluginRef = 'FaceMe';
  static repo = 'https://github.com/kakismash/cordova-plugin.git';
  static platforms = ['Android'];

  //@cordova()
  inizialize(arg: any): Promise<any> {
    return cordova(this, 'inizialize', { successIndex: 2, errorIndex: 3 }, [arg]);
  }

}
