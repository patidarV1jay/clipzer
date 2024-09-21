export interface dataType {
  currentTime: number;
}

export interface routeType {
  key: string;
  name: string;
  path?: string;
  params: {
    source: {
      title: string;
      description: string;
      thumb: string;
      subtitle: string;
      sources: string[];
    };
  };
}

export interface videoRefType {
  current: {
    seek: number;
  };
}
