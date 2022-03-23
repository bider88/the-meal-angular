type themeType = 'light' | 'dark';
type colorType = 'blue' | 'red' | 'green' | 'yellow';
type positionType = 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft' | 'topCenter' | 'bottomCenter' | 'center';

export interface ToastModel {
  title: string;
  message: string;
  theme?: themeType;
  color?: colorType;
  position?: positionType;
  timeout?: number;
  onOpening?(...args: any): any;
  onOpened?(...args: any): any;
  onClosing?(...args: any): any;
  onClosed?(...args: any): any;
}
