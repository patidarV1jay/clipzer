export interface RouteType {
    key: string;
    name: string;
    path?: string;
    params: {
      first_name: string;
      last_name: string;
      email: string;
      avatar: string | undefined;
    };
  }