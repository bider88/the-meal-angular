import { Injectable } from '@angular/core';
import { ToastModel } from './../../models/utils/toast.model';
import iziToast from 'izitoast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  showInfo(toast: ToastModel) {
    iziToast.info({
      position: 'bottomRight',
      timeout: 5000,
      ...toast,
    });
  }

  showWarning(toast: ToastModel) {
    iziToast.warning({
      position: 'bottomRight',
      timeout: 5000,
      ...toast,
    });
  }

  showSuccess(toast: ToastModel) {
    iziToast.success({
      position: 'bottomRight',
      timeout: 5000,
      ...toast,
    });
  }

  showError(toast: ToastModel) {
    iziToast.error({
      position: 'bottomRight',
      timeout: 5000,
      ...toast,
    });
  }

  showQuestion(toast: ToastModel, confirm: () => any) {
    iziToast.question({
      position: 'center',
      timeout: 60000,
      close: false,
      overlay: true,
      zindex: 999,
      buttons: [
        ['<button id="querstionBtnYes"><b>Si</b></button>', (instance, toastQ) => {
          instance.hide({ transitionOut: 'fadeOut' }, toastQ, 'button');
          confirm();
        }, true],
        ['<button id="querstionBtnNo">NO</button>', (instance, toastQ) => {
          instance.hide({ transitionOut: 'fadeOut' }, toastQ, 'button');
        }, false],
      ],
      ...toast,
    });
  }
}
