// {"placeholderName":"template","componentName":"HeaderBodyFooterComponent","componentSettings":{"labelFromJson":"Sitecore Experience Platform"}}
export interface Layout {
  name: string;
  path: string;
  type: string;
  placeholders: Placeholder[];
}

export interface Control {
  name: string;
  path: string;
  type: string;
  dataSources: DataSource[]
}

export interface DataSource{
  type:string;
  name:string;
  path: string;
  fields: Field[];
}

export interface Field{
  name:string;
  type:string;
  value: any;
}

export interface Placeholder{
  name:string;
  controls: Control[];
}
