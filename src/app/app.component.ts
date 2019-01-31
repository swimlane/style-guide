import { trigger } from '@angular/animations';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';
import { icons } from '@swimlane/ngx-ui/lib/assets/icons/json/icons.json';
import {
  InjectionService,
  NotificationService,
  IconRegisteryService,
  AlertService,
  DialogService,
  DrawerService,
  Hotkey,
  HotkeysService,
  LoadingService,
  bounce
  // } from '@swimlane/ngx-ui';
} from '../../projects/swimlane/ngx-ui/src/public_api';
import { getComputedStyle, rgb2hex } from './app.utils';
import { version, dependencies } from '../../projects/swimlane/ngx-ui/package.json';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app',
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.template.html',
  encapsulation: ViewEncapsulation.None,
  animations: [trigger('bounce', bounce)]
})
export class AppComponent {
  version = version;

  @ViewChild('editTmpl')
  editTmpl: TemplateRef<any>;
  @ViewChild('dialogTmpl')
  dialogTpl: TemplateRef<any>;

  navigationTree: any[] = [
    {
      name: 'Colors',
      route: 'colors',
      icon: 'formula'
    },
    {
      name: 'Typography',
      route: 'typography',
      icon: 'field-text'
    },
    {
      name: 'Icons',
      route: 'icons',
      icon: 'field-grid'
    },
    {
      name: 'Animations',
      route: 'animations',
      icon: 'stars'
    },
    {
      name: 'Forms',
      icon: 'application',
      children: [
        {
          name: 'Inputs',
          route: 'inputs'
        },
        {
          name: 'Buttons',
          route: 'buttons'
        },
        {
          name: 'Selects',
          route: 'selects'
        },
        {
          name: 'Date/Time Pickers',
          route: 'datetime'
        },
        {
          name: 'Slider',
          route: 'slider'
        },
        {
          name: 'Toggle',
          route: 'toggle'
        },
        {
          name: 'Checkbox',
          route: 'checkbox'
        },
        {
          name: 'Radio Button',
          route: 'radio'
        },
        {
          name: 'Calendar',
          route: 'calendar'
        },
        {
          name: 'Code Editor',
          route: 'code-editor'
        }
      ]
    },
    {
      name: 'Elements',
      icon: 'apps',
      children: [
        {
          name: 'Tables',
          route: 'table'
        },
        {
          name: 'Tags',
          route: 'tags'
        },
        {
          name: 'Lists',
          route: 'lists'
        },
        {
          name: 'Scrollbars',
          route: 'scrollbars'
        }
      ]
    },
    {
      name: 'Dialogs',
      icon: 'applet',
      children: [
        {
          name: 'Drawer',
          route: 'drawer'
        },
        {
          name: 'Nag',
          route: 'nag'
        },
        {
          name: 'Dialog',
          route: 'dialog'
        },
        {
          name: 'Alert/Confirm',
          route: 'alert'
        },
        {
          name: 'Tooltip',
          route: 'tooltip'
        },
        {
          name: 'Notification',
          route: 'notification'
        }
      ]
    },
    {
      name: 'Components',
      icon: 'integrations',
      children: [
        {
          name: 'Sections',
          route: 'sections'
        },
        {
          name: 'Toolbar',
          route: 'toolbar'
        },
        {
          name: 'Tabs',
          route: 'tabs'
        },
        {
          name: 'Dropdown',
          route: 'dropdown'
        },
        {
          name: 'Datatable',
          route: 'datatable'
        },
        {
          name: 'Loading',
          route: 'loading'
        },
        {
          name: 'Progress Spinner',
          route: 'progress-spinner'
        },
        {
          name: 'Tree',
          route: 'tree'
        },
        {
          name: 'JSON Editor',
          route: 'json-editor'
        },
        {
          name: 'Icon',
          route: 'ngx-icon'
        },
        {
          name: 'Split',
          route: 'split'
        },
        {
          name: 'Overlay',
          route: 'overlay'
        },
        {
          name: 'Hotkeys',
          route: 'hotkeys'
        }
      ]
    }
  ];
/* end of naviation tree */

  navExpanded: boolean = true;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public drawerMngr: DrawerService,
    public dialogMngr: DialogService,
    public notificationService: NotificationService,
    public injectionService: InjectionService,
    public alertService: AlertService,
    public loadingService: LoadingService,
    public hotkeysService: HotkeysService,
    public iconRegisteryService: IconRegisteryService,
    public location: Location,
    private sanitizer: DomSanitizer,
    public router: Router
  ) {
    // uncomment for testing
    // this.injectionService.setRootViewContainer(this.viewContainerRef);

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        loadingService.start();
      } else if (event instanceof NavigationEnd) {
        loadingService.complete();
        drawerMngr.destroyAll();
      }
    })

  }
  
}
