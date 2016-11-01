// {"placeholderName":"template","componentName":"HeaderBodyFooterComponent","componentSettings":{"labelFromJson":"Sitecore Experience Platform"}}
export interface Widget {
  placeholderName: string;
  componentName: string;
  componentSettings: { [key: string]: any; };
  childWidgets: Widget[];
}
