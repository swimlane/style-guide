import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@swimlane/ngx-ui';
import { FileUploader } from '@swimlane/ng2-file-upload';

@Component({
  selector: 'app-dropzone-page',
  templateUrl: './dropzone-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropzonePageComponent {
  acceptedFileFormats = ['.txt', '.ssp', '.json', '.png', '.jpg', '.csv'];

  uploaderInstance = new FileUploader({
    url: 'https://evening-anchorage-3159.herokuapp.com/api/',
    autoUpload: false
  });

  constructor(public dialogMngr: DialogService) {}

  openDialog(options) {
    this.dialogMngr.create(options);
  }
}
