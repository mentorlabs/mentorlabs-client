import { RouteComponentProps } from 'react-router';

export type WrapWithRouterProps<T> = T &
  RouteComponentProps<{
    // add custom types here
  }>;
